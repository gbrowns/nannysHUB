//require services
const messageService = require("../services/messageService");

//handle messages
const getAllMessages = async (req, res) => {
    try {
        const messages = await messageService.getAllMessages();
        res.send({ status: "ok", data: messages });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOneMessage = async (req, res) => {
    const {messageId} = req.params;
    if (!messageId){
        res.status(400).json({ status: "FAILED", message: "message Id is missing" });
    }

    try {
        const message = await messageService.getOneMessage(messageId);
        res.send({ status: "ok", data: message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createNewMessage = async (req, res) => {
    const {name, email, message} = req.body; //update later to include more fields
    const newMessage = {name, email, message};
    try {
        const createdMessage = await messageService.createNewMessage(newMessage);
        res.status(201).send({ status: "ok", data: createdMessage });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateOneMessage = async (req, res) => {
    const {body, params: {messageId}} = req
    if (!messageId){
        res.status(400).json({ status: "FAILED", message: "message Id is missing" });
    }
    try {
        const updatedMessage = await messageService.updateOneMessage(messageId, body);
        res.json({ status: "ok", data: updatedMessage });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteOneMessage = async (req, res) => {
    const {messageId} = req.params;
    if (!messageId){
        res.status(400).json({ status: "FAILED", message: "message Id is missing" });
    }
    try {
        const deletedMessage = await messageService.deleteOneMessage(messageId);
        res.json({ status: "ok", data: deletedMessage });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllMessages,
    getOneMessage,
    createNewMessage,
    updateOneMessage,
    deleteOneMessage
}