// Mastodon
import dotenv from 'dotenv';
import masto from './auth.js';
dotenv.config({ path: './.env' });

let obj = {};
let jsonData = [];

const fetchToots = new Promise((resolve, reject) => {
    masto.v1.accounts.listStatuses("109279080821915658", {limit: 40}).then((data) => {
        for (let i = 0; i < data.length; i++) {
            obj = {
                "tootID": data[i].id,
                "boosted": data[i].reblogged,
                "url": data[i].url,
                "username": data[i].account.username,
                "avatarStatic": data[i].account.avatarStatic,
                "createdAt": data[i].account.createdAt,
                "content": data[i].content
            };
            jsonData.push(obj);
        }
        resolve(jsonData);
    }).catch(err => console.log(err));
});

export default fetchToots;