const fs = require('fs');

const { CREDENTIALS_PATH } = require('../src/sheets/index');
const { authorize } = require('../src/sheets/auth'); 

fs.readFile(CREDENTIALS_PATH, (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials
    authorize(JSON.parse(content), (client) => console.log(client));
});