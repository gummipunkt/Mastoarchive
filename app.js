import fetchToots from "./fetchToots.js";

Promise.all([fetchToots]).then((values) => {
    console.log(values);
});