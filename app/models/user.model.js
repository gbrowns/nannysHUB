const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
     username: {
          type: String,
          required: [true, "username not provided"]

     },
     email: {
          type: String,
          required: [true, "email not provided"],
          unique: true
     },
     password: {
          type: String,
          required: true
     },
     createAt: {
          type: Date,
          default: Date.now,
          immutable: true
     }
});

module.exports = mongoose.model('User', userSchema);