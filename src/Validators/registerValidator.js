const { check, validationResult } = require('express-validator');

exports.validateRegistration = [
    check('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    check('mobile')
        .notEmpty().withMessage('Mobile number is required')
        .isMobilePhone().withMessage('Invalid mobile number'),
    check('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email address'),
    check('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    check('confirm_password')
        .notEmpty().withMessage('Confirm Password is required')
        .custom((value, { req }) => value === req.body.password).withMessage('Passwords do not match'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const uniqueErrors = [];
            const seenFields = new Set();

            errors.array().forEach(error => {
                if (!seenFields.has(error.path)) {
                    seenFields.add(error.path);
                    uniqueErrors.push(error);
                }
            });

            return res.render('Pages/Auth/register', { errors: uniqueErrors, error: null, success: null });
        }
        next();
    }
];
