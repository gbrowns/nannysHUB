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
            required: true,
            unique: true
      },
      phone: {
            type: String,
            required: true
      },
      address: {
            type: String,
            required: true
      },
      location: {
            type: String,
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
      empStatus: {
            type: String,
            required: true
      },
      salary: {
            type: String,
            required: true
      },
      jobOptions: [{ type: String, required: true }],
      availability: {
            type: String,
            required: true
      },
      agreementOptions: [{ type: String, required: true }],
      message: {
            type: String,
            required: true
      },
      approved: {
            type: Boolean,
            default: false
      },
      booked: {
            type: Boolean,
            default: false
      },
      createAt: {
            type: Date,
            immutable: true, //cannot be changed
            default: () => Date.now()
      }
});

module.exports = mongoose.model('Nanny', nannySchema);