const { google } = require('googleapis');

const { SPREADSHEET_ID, SPREADSHEET_RANGE } = require('./index'); 

/**
 * Retrieves the spreadsheet of form responses
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function listResponses(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: SPREADSHEET_RANGE,
    }, (err, res) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        reject({});
      }
      const rows = res.data.values;
      if (rows.length) {
        return resolve(rows);
      } else {
        return reject({}); // No Data Found
      }
    });
  });
}

module.exports = {
  listResponses
};