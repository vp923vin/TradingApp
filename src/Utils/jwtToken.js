const jwt = require('jsonwebtoken');
const { secretKey, tokenExpires, refreshTokenExpires } = require('../Config/jwt');

const createToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: tokenExpires });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        throw new Error("Token verification failed: " + err.message);
    }
};

const createRefreshToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: refreshTokenExpires });
};

const refreshAccessToken = (refreshToken) => {
    try {
        const payload = jwt.verify(refreshToken, secretKey);
        // Optionally, you can check if the user is still valid, if needed.
        return createToken({ id: payload.id, username: payload.username });
    } catch (err) {
        throw new Error("Refresh token verification failed: " + err.message);
    }
};

module.exports = {
    createToken,
    verifyToken,
    createRefreshToken,
    refreshAccessToken
};
