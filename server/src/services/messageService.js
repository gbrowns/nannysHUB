const {v4: uuid} = require('uuid');
//require model
const Message = require('../databases/models/Message');

//handle messages
const getAllMessages = async () => {
   try{
    const allMessages = await Message.find({});

    return allMessages;

   }catch(error){
        throw error;
   }
}

const getOneMessage = async (messageId) => {
    try{
        const oneMessage = await Message.findById(messageId);
        return oneMessage;
    }catch(error){
        throw error;
    }
}

const createNewMessage = async (newMessage) => {

    /*const messageToInsert = {
        ...newMessage,
        id: uuid(),
        sentAt: new Date().toLocaleTimeString,
        updatedAt: new Date().toLocaleTimeString
    }*/

    try{
        const createdMessage = await Message.create(newMessage);
        await createdMessage.save();
        return createdMessage;
    }catch(error){
        throw error;
    }
}

const updateOneMessage = async (messageId, change) => {
    try{
        const updatedMessage = await Message.findOneAndUpdate({_id: messageId}, change, {new: true});
        return updatedMessage;
    }catch(error){
        throw error;
    }
}

const deleteOneMessage = (messageId) => {
    try{
        const messageDeleted = Message.findByIdAndDelete(messageId);
        return messageDeleted;
    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllMessages,
    getOneMessage,
    createNewMessage,
    updateOneMessage,
    deleteOneMessage
}
