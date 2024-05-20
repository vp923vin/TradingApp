require('dotenv').config();

if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT_SECRET_KEY is not defined in the environment variables");
}
const secretKey = process.env.JWT_SECRET_KEY;
const tokenExpires = 180000; // 3 min.
const refreshTokenExpires = 86400000; // 24 hours

module.exports = {
    tokenExpires,
    refreshTokenExpires,
    secretKey
};