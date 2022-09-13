//require services
const nannyService = require("../services/nannyService");
const sendEmail = require('../utils/sendEmail')
//handle users
const getAllNannies = async (req, res) => {
    try {
        //const nannies = await nannyService.getAllNannies(filter);
        res.send({ status: "ok", data: res.paginatedResults  });
        
        //res.send({ status: "ok", data: nannies });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err)
    }
}

const getOneNanny = async (req, res) => {
    const {nannyId} = req.params;
    if (!nannyId){
        res.status(400).json({ status: "FAILED", message: "Nanny Id is missing" });
    }

    try {
        const nanny = await nannyService.getOneNanny(nannyId);
        res.send({ status: "ok", data: nanny });
    } catch (err) {

        res.status(500).json({ message: err.message });
    }
}

const createNewNanny = async (req, res) => {
    const { firstname, lastname, email, phone, city, location, gender, age, employment_status, agreement_type, availableTime, work_type, message} = req.body; //update later to include more fields
    const newNanny = { firstname, lastname, email, phone, city, location, gender, age, employment_status, agreement_type, availableTime,work_type, message, state: "pending"};

    const nannyEmail = {
        email: email,
        subject: "Request To Become a Nanny",
        message: `Hello ${firstname} ${lastname},
        Your request to become a nanny has been received. We will get back to you shortly.
        Thank you!`
    }

    //check inputs are in place
    if (!firstname || !lastname || !email || !phone || !city || !location || !gender || !age || !employment_status || !work_type || !agreement_type || !availableTime || !message) {
        res.status(400).json({ status: "FAILED", message: "Please fill out all fields" });
    }
    
    try {

        const createdNanny = await nannyService.createNewNanny(newNanny);
        res.status(201).send({ status: "ok", data: createdNanny });
        sendEmail(nannyEmail);
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err)
    }
}

const updateOneNanny = async (req, res) => {
    const {body, params: {nannyId}} = req

    if (!nannyId){
        res.status(400).json({ status: "FAILED", message: "nanny Id is missing" });
    }

    try {
        const updatedNanny = await nannyService.updateOneNanny(nannyId, body);
        res.json({ status: "ok", data: updatedNanny });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteOneNanny = async (req, res) => {
    const {nannyId} = req.params;

    if (!nannyId){
        res.status(400).json({ status: "FAILED", message: "nanny Id is missing" });
    }

    try {
        await nannyService.deleteOneNanny(nannyId);
        res.json({ status: "ok", message: "nanny is deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllNannies,
    getOneNanny,
    createNewNanny,
    updateOneNanny,
    deleteOneNanny
}