import fs from 'fs';
const readJson = async function() {
    try {
        var obj = JSON.parse(fs.readFileSync('statuses.json', 'utf8'));
        return obj;
    } catch(err) {
        console.log(err);
    }
};
//await readJson();
export default readJson;