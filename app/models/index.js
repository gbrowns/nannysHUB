//initialize mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {}; //create an empty object to store the models

db.mongoose = mongoose;

db.user = require("./user.model");

db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;