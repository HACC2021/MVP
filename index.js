const fs = require('fs');
const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const { body, validationResult } = require('express-validator');

require('dotenv').config(); // Initialize .env config variables
const PORT = process.env.PORT || 5000;

const app = express();

const { CREDENTIALS_PATH } = require('./src/sheets/index');
const { authorize } = require('./src/sheets/auth');
const { listResponses } = require('./src/sheets/list');
const { transformList } = require('./src/sheets/transform');

const { sendMail } = require('./src/mailer/sendMail');
const { sendSMS } = require('./src/twilio/sendSMS');

let googleAuthClient = {}; // Store the Authorized Google Auth Client

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '15mb' }));

fs.readFile(CREDENTIALS_PATH, (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials
  authorize(JSON.parse(content), (client) => googleAuthClient = client);
});

app.get('/data', async (req, res) => res.json(transformList(await listResponses(googleAuthClient))));
app.post('/data', async (req, res) => res.json(transformList(await listResponses(googleAuthClient))));

app.post('/notify', body('email').isEmail(), async (req, res) => {
  const { email } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return res.send(await sendMail(email));
});

app.post('/sms', body('phoneNumber').isMobilePhone(), async (req, res) => {
  const { phoneNumber } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return res.send(await sendSMS(phoneNumber));
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
