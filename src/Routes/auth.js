const express = require('express');

const router = express.Router();
const { registration } = require('../Controllers/Auth/registerController')
router.get('/register', registration);



module.exports = router;