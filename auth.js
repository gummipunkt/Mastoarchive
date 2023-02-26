/* import modules */
// Mastodon
import { login } from 'masto';
// ENV
import dotenv from 'dotenv';

// load ENV
dotenv.config({ path: './.env' });

const mastologin = async function() {
    try {
        const masto = await login({
            url: process.env.URL,
            accessToken: process.env.TOKEN
        });
        return masto;
    } catch(err) {
        alert(err)
    }
};

export default mastologin;