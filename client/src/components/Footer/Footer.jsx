import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Columna 1: Branding y Descripción */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-teal-600 text-white px-3 py-1 font-bold text-xl">D</div>
              <span className="font-bold text-xl text-white tracking-wider">ZAIN</span>
            </div>
            <p className="text-sm leading-relaxed">
              Elevando el estándar del diseño de interiores con mobiliario de alta gama que combina confort, 
              estética y funcionalidad para transformar tu hogar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Navegación</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Nuestras Colecciones</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Servicios de Diseño</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Blog de Tendencias</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-teal-500 shrink-0" />
                <span>Av. Principal de Diseño #123, Ciudad Creativa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-teal-500 shrink-0" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-teal-500 shrink-0" />
                <span>contacto@dzain.com</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-sm mb-4">Suscríbete para recibir ofertas exclusivas y consejos de diseño.</p>
            <form className="flex flex-col space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-sm py-2 px-4 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-teal-500 hover:text-teal-400"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Línea Divisoria y Copyright */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 D'ZAIN MOBILIARIO. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;