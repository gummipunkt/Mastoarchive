// Mastodon
import dotenv from 'dotenv';
import mastologin from './auth.js';
import fs, { stat } from 'fs';
dotenv.config({ path: './.env' });

const fetchToots = async function() {
    try {
    const jsonData = masto.v1.accounts.listStatuses("109279080821915658", {limit: 40})
    return jsonData;
    } catch(err) {
        alert(err)
    }
};

const writeJson = async function() {
    try {
    const filepathenv = process.env.FILE;
    const statusfile = fs.writeFile(filepathenv, JSON.stringify(jsonDataFile), { flags: 'w+' }, function (err, jsonDataFile) {
        console.log('Successfully wrote file');
        return statusfile;
    });
    } catch(err) {
        alert(err)
    }
};

const masto = await mastologin();
const jsonDataFile = await fetchToots();
await writeJson();

export default fetchToots;