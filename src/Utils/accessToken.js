const bcrypt = require('bcrypt');

const getToken = async (password, email, name) => {
    const hashToken = JSON.stringify({ password, email, name, data: "keytoAccess" });
    const hashedToken = await bcrypt.hash(hashToken, 10);
    return hashedToken;
};


module.exports = getToken;