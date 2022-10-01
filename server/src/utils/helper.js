const bycrpt = require('bcrypt');

function hashPassword(password) {
    const salt = 10;//bycrpt.genSaltSync(); //default 10
    return bycrpt.hash(password, salt);
}

const comparePassword = (password, hashedPassword) => {
    return bycrpt.compare(password, hashedPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}