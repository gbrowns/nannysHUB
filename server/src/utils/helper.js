const bycrpt = require('bcrypt');

function hashPassword(password) {
    const salt = bycrpt.genSaltSync(); //default 10
    return bycrpt.hashSync(password, salt);
}

module.exports = {
    hashPassword
}