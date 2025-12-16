import ContactService from '../services/contactService.js';
import verifyCaptcha from '../utils/verifyCaptcha.js';

class contactController {
    async handleSubmission(req, res) {
        const { name, email, message, captchaToken } = req.body;

        // 1️⃣ Validación básica
        if (!name || !email || !message || !captchaToken) {
            return res.status(400).json({
                success: false,
                message: 'Faltan campos obligatorios o captcha.',
            });
        }

        try {
            // 2️⃣ Verificar reCAPTCHA
            const captchaResult = await verifyCaptcha(
                captchaToken,
                req.ip
            );

            if (!captchaResult.success) {
                return res.status(403).json({
                    success: false,
                    message: 'Captcha inválido.',
                });
            }

            // Score recomendado
            if (captchaResult.score < 0.5) {
                return res.status(403).json({
                    success: false,
                    message: 'Actividad sospechosa detectada.',
                });
            }

            // Acción (extra seguridad)
            if (captchaResult.action !== 'contact_form') {
                return res.status(403).json({
                    success: false,
                    message: 'Acción de captcha no válida.',
                });
            }

            // 3️⃣ Delegar al service
            await ContactService.sendContactEmail({ name, email, message });

            return res.status(200).json({
                success: true,
                message: 'Mensaje enviado con éxito.',
            });

        } catch (error) {
            console.error('Error en ContactController:', error.message);
            return res.status(500).json({
                success: false,
                message: 'Error interno del servidor.',
            });
        }
    }
}

export default new contactController();
