const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

const defaultSMSOptions = {
    from: process.env.TWILIO_PHONE_NUMBER,
    body: 'ANIMAL QUARANTINE SERVICES: Please come in to the office as your pet is ready for pickup. Mahalo.'
};

async function sendSMS(phoneNumber) {
    if (!phoneNumber) return;

    return new Promise((resolve, reject) => {
        client.messages
            .create({
                ...defaultSMSOptions,
                to: phoneNumber
            })
            .then((message) => {
                console.log(message.sid);
                resolve(message);
            })
            .catch((error) => {
                console.error(error);
                reject({
                    error: true,
                    errorBody: error
                });
            });
    });
}

module.exports = {
    sendSMS
};
