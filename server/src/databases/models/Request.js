const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const requestSchema = new Schema({
    nannyId: {
        type: String,
        required: true
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
    status: {
        type: String,
        required: true
    }

})



module.exports = mongoose.model('Request', requestSchema);