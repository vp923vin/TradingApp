const express = require('express');
const path = require('path');
const { port, appName, url, environment } = require('./src/Config/app');
const configRoutes = require('./src/Config/routes');

const app = express();


app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');
configRoutes(app);


app.get('/', (req, res) => {
    res.send("Nodejs Env Is Set");
});

app.listen(port, () => {
    console.log(`Server is started at port ${port} and browser uri is ${url}:${port},
    app name is ${appName} and Environment is Set ${environment }`)
});
