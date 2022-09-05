//require services
const adminService = require("../services/adminService");
const {hashPassword} = require('../utils/helper');

//handle users
const getAllAdmins = async (req, res) => {
    try {
        const admins = await adminService.getAllAdmins();
        res.json({ status: "ok", data: admins });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err)
    }
}

const getOneAdmin = async (req, res) => {
    const { adminId } = req.params;
    if (!adminId) {
        res.status(400).json({ status: "FAILED", message: "admin Id is missing" });
    }

    try {
        const admin = await adminService.getOneAdmin(adminId);
        res.send({ status: "ok", data: admin });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createNewAmin = async (req, res) => {
    //createNewAdmin
    const { username } = req.body; //update later to include more fields

    /*check inputs are in place
    if (!username || !password) {
        res.status(400).json({ status: "FAILED", message: "Please fill out all fields" });
    }*/

    //new user object
    const password = hashPassword(req.body.password);
    const newAdmin = { 
        username, 
        password,
        ROLE: "admin" 
    };

    try {
        const createdAdmin = await adminService.createNewAdmin(newAdmin);
        res.status(201).send({ status: "ok", data: createdAdmin });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err)
    }
}

const updateOneAdmin = async (req, res) => {
    const { params: { adminId } } = req
    const password = hashPassword(req.body.password);
    const newBody = { ...req.body, password };
    if (!adminId) {
        res.status(400).json({ status: "FAILED", message: "nanny Id is missing" });
    }

    try {
        const updatedAdmin = await adminService.updateOneAdmin(adminId, newBody);
        res.json({ status: "ok", data: updatedAdmin });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteOneAdmin = async (req, res) => {
    const { adminId } = req.params;

    if (!adminId) {
        res.status(400).json({ status: "FAILED", message: "nanny Id is missing" });
    }

    try {
        await adminService.deleteOneAdmin(adminId);
        res.json({ status: "ok", message: "Admin is deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllAdmins,
    getOneAdmin,
    createNewAmin,
    updateOneAdmin,
    deleteOneAdmin
}