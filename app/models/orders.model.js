const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
      nannyId: {
            type: Schema.Types.ObjectId,
            ref: "Nanny",
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
            required: true,
            unique: true
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



module.exports = mongoose.model('Order', orderSchema);