const Payment = require('../databases/models/Payment');

//get all payments
const getAllPayments = () => {
    try{
     const allPayments = Payment.find({});
    
     return allPayments;
    
    }catch(error){
          throw error;
    }
}

//get one payment
const getOnePayment = async (clientId) => {
    try{
        const onePayment = await Payment.findById(clientId);
        return onePayment;
    }catch(error){
        throw error;
    }
}

//create new payment
const createNewPayment = async (newPayment) => {
    try{
        const createdPayment = await Payment.create(newPayment);
        await createdPayment.save();
        return createdPayment;
    }catch(error){
        throw error;
    }
}

//payment cant be updated
/*
const updatePayment = async (clientId, change) => {
    try{
        const updatedPayment = await Payment.updateOne(change).where({id: clientId});
        return updatedPayment;
    }catch(error){
        throw error;
    }
}*/

//payment cant be deleted in the meantime
/*
const deleteOnePayment = async (clientId) => {
    try{
        const paymentDeleted = await Payment.findByIdAndDelete(clientId);
        return paymentDeleted;

    }catch(error){
        throw error;
    }
}*/