require('dotenv').config();

const port = process.env.APP_PORT;
const appName = process.env.APP_NAME;
const url = process.env.APP_URI;
const environment = process.env.APP_ENV;


module.exports = {
    port,
    appName,
    url,
    environment
}