const express = require('express');
const path = require('path');

const apiRoutes = require('../Routes/api');
const adminRoutes = require('../Routes/admin');
const userRoutes = require('../Routes/user');

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.set('views', path.join(__dirname, '../Views'));
    app.set('view engine', 'ejs');
    app.use('/api', apiRoutes);
    app.use('/admin', adminRoutes);
    app.use('/user', userRoutes);
};