const express = require('express');
const path = require('path');
const syncDatabase = require('./src/Queries/Sync/sync');
// const insertDummyData = require('./src/Queries/Insert/User');
require('./src/Config/db');

const { port, appName, url, environment } = require('./src/Config/app');
const configRoutes = require('./src/Config/routes');

const app = express();


app.set('views', path.join(__dirname, 'src', 'Views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
configRoutes(app);




app.get('/', (req, res) => {
    res.send("Nodejs Env Is Set");
});


app.listen(port, async () => {
    // await syncDatabase();
    // insertDummyData();
    console.log(`Server is started at port ${port} and browser uri is ${url}:${port},
    app name is ${appName} and Environment is Set ${environment}`)
});
