import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import dotenv from 'dotenv';
dotenv.config()

const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIV_KEY!.split(String.raw`\n`).join('\n'),
    scopes: [
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
    ]
})

const _issue_doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ISSUES!, serviceAccountAuth);
const _design_doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_DESIGN_FORM!, serviceAccountAuth);
const _dev_doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_DEV_FORM!, serviceAccountAuth);

const getIssueSheet: () => Promise<GoogleSpreadsheetWorksheet> = async () => {
    await _issue_doc.loadInfo();
    return _issue_doc.sheetsByIndex[0];
}

interface RegistrantSheets {
    designers: GoogleSpreadsheetWorksheet;
    developers: GoogleSpreadsheetWorksheet;
}

const getRegistrantSheets: () => Promise<RegistrantSheets> = async () => {
    await _design_doc.loadInfo();
    await _dev_doc.loadInfo();
    return {
        designers: _design_doc.sheetsByIndex[0],
        developers: _dev_doc.sheetsByIndex[0]
    }
}

export { getIssueSheet, getRegistrantSheets };