const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    message: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        immutable: true, //cannot be changed
        default: () => Date.now()
    }
})

module.exports = mongoose.model('Message', messageSchema);