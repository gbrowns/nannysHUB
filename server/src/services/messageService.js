const {v4: uuid} = require('uuid');
//require model
const Message = require("../database/Message");

//handle messages
const getAllMessages = () => {
   try{
    const allMessages = Message.getAllMessages();

    return allMessages;

   }catch(error){
        throw error;
   }
}

const getOneMessage = (messageId) => {
    try{
        const oneMessage = Message.getOneMessages(messageId);
        return oneMessage;
    }catch(error){
        throw error;
    }
}

const createNewMessage = (newMessage) => {

    const messageToInsert = {
        ...newMessage,
        id: uuid(),
        sentAt: new Date().toLocaleTimeString,
        updatedAt: new Date().toLocaleTimeString
    }

    try{
        const createdMessage = Message.createNewMessage(messageToInsert);
        return createdMessage;
    }catch(error){
        throw error;
    }
}

const updateOneMessage = (messageId, change) => {
    try{
        const updatedMessage = Message.updateOneMessage(messageId, change);
        return updatedMessage;
    }catch(error){
        throw error;
    }
}

const deleteOneMessage = (messageId) => {
    try{
        const messageDeleted = Message.deleteOneMessage(messageId);
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
