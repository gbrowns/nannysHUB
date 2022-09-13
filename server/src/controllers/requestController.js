//require services
const requestService = require("../services/requestService");
const sendEmail = require('../utils/sendEmail')


//handle requests
const getAllRequests = async (req, res) => {
    try {
        //const requests = await requestService.getAllRequests();
        res.send({ status: "ok", data: res.paginatedResults  });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOneRequest = async (req, res) => {
    const {requestId} = req.params;
    if (!requestId){
        res.status(400).json({ status: "FAILED", message: "request Id is missing" });
    }

    try {
        const request = await requestService.getOneRequest(requestId);
        res.send({ status: "ok", data: request });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createNewRequest = async (req, res) => {
    
    try {
        const { nannyId, firstname, lastname, email, phone, message } = req.body;
        const newRequest = { nannyId, firstname, lastname, email, phone, message, paid: false /*, status: "pending"*/ };

        const requestEmail = {
            email: email,
            subject: "Request for Nanny",
            message: `Hello ${firstname}, your request for a nanny has been received. We will get back to you shortly.`
        }
        const createdRequest = await requestService.createNewRequest(newRequest);
        res.status(201).send({ status: "ok", data: createdRequest });
        sendEmail(requestEmail); //send email on successful requests
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const updateOneRequest = async (req, res) => {
    const {body, params: {requestId}} = req
    if (!requestId){
        res.status(400).json({ status: "FAILED", message: "request Id is missing" });
    }
    try {
        const updatedRequest = await requestService.updateOneRequest(requestId, body);
        res.json({ status: "ok", data: updatedRequest });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteOneRequest = async (req, res) => {
    const {requestId} = req.params;
    if (!requestId){
        res.status(400).json({ status: "FAILED", message: "request Id is missing" });
    }
    try {
        const deletedRequest = await requestService.deleteOneRequest(requestId);
        res.json({ status: "ok", data: deletedRequest });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllRequests,
    getOneRequest,
    createNewRequest,
    updateOneRequest,
    deleteOneRequest
    
}