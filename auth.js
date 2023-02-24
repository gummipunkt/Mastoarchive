/* import modules */
// Mastodon
import { login } from 'masto';
// ENV
import dotenv from 'dotenv';

// load ENV
dotenv.config({ path: './.env' });

const masto = await login({
    url: process.env.URL,
    accessToken: process.env.TOKEN
});

export default masto;

