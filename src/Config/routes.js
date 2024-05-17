const express = require('express');

const apiRoutes = require('../Routes/api');
const adminRoutes = require('../Routes/admin');
const authRoutes = require('../Routes/auth');
const userRoutes = require('../Routes/user');

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);
    app.use('/admin', adminRoutes);
    app.use('/auth', authRoutes);
    app.use('/user', userRoutes);
};