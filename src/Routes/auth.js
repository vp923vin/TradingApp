const express = require('express');

const router = express.Router();

const { 
    registration, 
    registerUser 
} = require('../Controllers/Auth/registerController');
const { validateRegistration } = require('../Validators/registerValidator');

router.get('/register', registration);
router.post('/register',validateRegistration,  registerUser);



module.exports = router;