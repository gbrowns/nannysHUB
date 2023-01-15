const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
      clientId: {
            type: Schema.Types.ObjectId,
            ref: 'Order',
      },
      receiptNumber: {
            type: String,
            required: true
      },
      amount: {
            type: Number,
            required: true
      },
      phone: {
            type: Number,
            required: true
      },
      date: {
            type: String,
            required: true
      }
})

module.exports = mongoose.model('Payment', paymentSchema);