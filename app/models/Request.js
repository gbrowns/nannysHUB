const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Nanny = require('./Nanny');

const requestSchema = new Schema({
    nannyId: {
        type: Schema.Types.ObjectId,
        ref: Nanny,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    paid: {
        type: Boolean,
        default: false
        //required: true
    },
    createAt: {
        type: Date,
        immutable: true, //cannot be changed
        default: () => Date.now()
    }

})



module.exports = mongoose.model('Request', requestSchema);