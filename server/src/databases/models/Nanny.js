const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nannySchema = new Schema({
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
    city: {
        type: String,
        required: true
    },
    location: {
        type: Object,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    employment_status: {
        type: String,
        required: true
    },
    agreement_type: [{ type: String, required: true }],
    availableTime: {
        type: String,
        required: true
    },
    work_type: [{ type: String, required: true }],
    message: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Nanny', nannySchema);