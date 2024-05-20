require('dotenv').config();
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('../Config/db'); 
const session_key = process.env.SESSION_SECRET_KEY;
const maxAge = 24 * 60 * 60 * 1000; // 1 day in milliseconds

const sessionConfig = {
  secret: session_key, 
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set it to true if you are using HTTPS
    httpOnly: true,
    maxAge: maxAge, 
  },
  store: new SequelizeStore({
    db: sequelize, 
    tableName: 'session', 
  }),
};

module.exports = sessionConfig;
