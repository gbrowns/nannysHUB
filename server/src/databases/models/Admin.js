const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
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
    role: {
        type: String,
        default: "admin",
        required: true
    },
    token: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now,
        immutable: true
    }
});

module.exports = mongoose.model('Admin', adminSchema);