const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.GOOGLEACC_USER,
        pass: process.env.GOOGLEACC_PASS
    }
});

const defaultMailOptions = {
    from: process.env.GOOGLEACC_USER,
    subject: 'ANIMAL QUARANTINE SERVICES',
    text: 'Please come in to the office as your pet is ready for pickup. Mahalo.'
};

async function sendMail(email, opts={}) {
    if (!email) return;

    return new Promise((resolve, reject) => {
        transporter.sendMail({
            ...defaultMailOptions,
            ...opts,
            to: email
        }, (error, info) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve(info);
            }
        });
    });
}

module.exports = {
    sendMail
};
