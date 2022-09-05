const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Nanny = require('./Nanny');

const requestSchema = new Schema({
    nanny: {
        type: Schema.Types.ObjectId,
        ref: Nanny
        //required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    paid: {
        type: Boolean
        //required: true
    },
    createAt: {
        type: Date,
        immutable: true, //cannot be changed
        default: () => Date.now()
    },/*,
    status: {
        type: String
        //required: true
    }*/

})



module.exports = mongoose.model('Request', requestSchema);