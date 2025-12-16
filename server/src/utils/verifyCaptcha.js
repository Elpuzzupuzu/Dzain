import fetch from 'node-fetch';

const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify';

const verifyCaptcha = async (token, remoteIp) => {
    const params = new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
    });

    if (remoteIp) {
        params.append('remoteip', remoteIp);
    }

    const response = await fetch(RECAPTCHA_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
    });

    return response.json();
};

export default verifyCaptcha;
