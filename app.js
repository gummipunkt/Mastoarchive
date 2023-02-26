import fetchToots from './fetchToots.js';
import readJson from './readJson.js';

await fetchToots();
const obj = await readJson();
console.log(obj.length);