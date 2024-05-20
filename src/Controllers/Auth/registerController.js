const { validationResult } = require('express-validator');
const User = require('../../Models/Users');
const hashPassword = require('../../Utils/hashPassword');
const getToken = require('../../Utils/accessToken');




const registration = (req, res) => {
    res.render('Pages/Auth/register', { error: null, errors: [], success:null });
}

const registerUser = async (req, res) => {
    const { name, mobile, email, password, confirm_password } = req.body;
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.render('Pages/Auth/register', { errors: errors.array() });
    // }

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.render('Pages/Auth/register', { error: 'Email already exists', errors: errors.array(), success:null });
        }

        // if (password !== confirm_password) {
        //     return res.render('Pages/Auth/register', { error: 'Passwords do not match', errors:errors.array(), success:null });
        // }
        const Password =  await hashPassword(password);
        const accessToken =  await getToken(password, email, name);
        const newUser = await User.create({
            name,
            mobile,
            email,
            password: Password,
            access_token: accessToken
        });
        res.render('Pages/Auth/register', { success: 'User registered successfully', user: newUser, error:null, errors:[] });
    } catch (error) {
        console.error('Error registering user:', error);
        res.render('Pages/Auth/register', { error: 'Internal server error', success:null });
    }
    console.log(req.body)
}

const userVerifyDocs = (req, res) => {

}


module.exports = {
    registration,
    registerUser,
    userVerifyDocs
}