//require services
const nannyService = require("../services/nannyService");

//handle users
const getAllNannies = async (req, res) => {
    try {
        const nannies = await nannyService.getAllNannies();
        res.json({ status: "ok", data: nannies });
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
/*
const createNewNanny = async (req, res) => {
    const {username, email, location} = req.body; //update later to include more fields

    //check inputs are in place
    if (!username || !email || !location) {
        res.status(400).json({ status: "FAILED", message: "Please fill out all fields" });
    }
    //new user object
    const newNanny = {username, email, location};
    
    try {
        const createdNanny = await nannyService.createNewNanny(newNanny);
        res.status(201).send({ status: "ok", data: createdNanny });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err)
    }
}
*/
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
    /*createNewNanny,*/
    updateOneNanny,
    deleteOneNanny
}