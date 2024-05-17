require('dotenv').config();
const { Sequelize } = require('sequelize');

const hostName = process.env.DB_HOST;
const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const driver = process.env.DB_DRIVER;

const sequelize = new Sequelize(database, userName, password, {
  host: hostName,
  dialect: driver
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
