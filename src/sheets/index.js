const path = require('path');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = path.resolve(__dirname, '..', '..', 'token.json');
const CREDENTIALS_PATH = path.resolve(__dirname, '..', '..', 'google-credentials.json');

const SPREADSHEET_ID = '13Enx9yXIjUpO3Tl1S8-OvJ8f6htDbNlqh3rDdf93JcA';
const SPREADSHEET_RANGE = 'Form Responses';

module.exports = {
    SCOPES,
    TOKEN_PATH,
    CREDENTIALS_PATH,
    SPREADSHEET_ID,
    SPREADSHEET_RANGE
};
