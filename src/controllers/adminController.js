//require services
require('dotenv').config();
const jwt = require('jsonwebtoken');
const adminService = require("../services/adminService");
const {hashPassword, comparePassword} = require('../utils/helper');

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

    try {
        //createNewAdmin
        const { username, email, password } = req.body; //update later to include more fields

        //check inputs are in place
        if (!(username && email && password)) {
            res.status(400).json({ status: "FAILED", message: "Please fill out all fields" });
        }

        //check if user exists
        const oldAdmin = await adminService.loginAdmin(email);

        if (oldAdmin) {
            return res.status(409).json({ status: "FAILED", message: "Admin already exists" });
        }

        //new user object
        const encryptedPassword = hashPassword(req.body.password);
        // new admin object
        const newAdmin = {
            username,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
            role: "admin"
        };
        
        const createdAdmin = await adminService.createNewAdmin(newAdmin);

        //create tokens
        const token = jwt.sign(
            {admin_id: createdAdmin._id, email },
            process.env.TOKEN_SECRET,
            { expiresIn: '2h' }
        );

        //save admin tokens
        createdAdmin.token = token;

        res.status(201).send({ status: "ok", data: createdAdmin });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message)
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

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        //check inputs are in place
        if (!(email && password)) {
            res.status(400).json({ status: "FAILED", message: "Please fill out all fields" });
        }
        //check if user exists
        const admin = await adminService.loginAdmin(email);

        if (admin && admin.password === comparePassword(password, admin.password)) { //change this to compare password
            //create tokens
            const token = jwt.sign(
                {admin_id: admin._id, email }, //replace with email
                process.env.TOKEN_SECRET,
                { expiresIn: '2h' }
            );
            //refreshToken //TODO: add refresh token later
            const refreshToken = jwt.sign(
                {username: admin.username,role: admin.role },
                process.env.TOKEN_SECRET,
                { expiresIn: '7d' }
            );

            //save user tokens
            admin.token = token;

            res.json({ status: "OK", data: admin, message: "Login Successful" });
        }
        res.json({ status: "FAILED", message: "Invalid Credentials" });
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllAdmins,
    getOneAdmin,
    createNewAmin,
    updateOneAdmin,
    deleteOneAdmin,
    loginAdmin
}