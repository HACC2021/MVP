const fs = require('fs');
const path = require('path');

const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

const { CREDENTIALS_PATH } = require('./src/sheets/index');
const { authorize } = require('./src/sheets/auth');
const { listResponses } = require('./src/sheets/list');

let googleAuthClient = {}; // Store the Authorized Google Auth Client

app.use(express.static(path.join(__dirname, 'public')));

fs.readFile(CREDENTIALS_PATH, (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials
  authorize(JSON.parse(content), (client) => googleAuthClient = client);
});

app.get('/data', async (req, res) => {
    return res.json(await listResponses(googleAuthClient));
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`));
