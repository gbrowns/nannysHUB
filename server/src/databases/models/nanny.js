const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nannySchema = new Schema({
    username: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    location: { 
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Nanny', nannySchema);