//require services
const userService = require("../services/messageService");

//handle users
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.send({ status: "ok", data: users });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOneUser = async (req, res) => {
    const {userId} = req.params;
    if (!userId){
        res.status(400).json({ status: "FAILED", message: "user Id is missing" });
    }

    try {
        const user = await userService.getOneUser(userId);
        res.send({ status: "ok", data: user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createNewUser = async (req, res) => {
    const {name, email, password} = req.body;

    //check inputs are in place
    if (!name || !email || !password ) {
        res.status(400).json({ status: "FAILED", message: "Please fill out all fields" });
    }

    const newUser = {name, email, password};
    
    try {
        const createdUser = await userService.createNewUser(newUser);
        res.status(201).send({ status: "ok", data: createdUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateOneUser = async (req, res) => {
    const {body, params: {userId}} = req

    if (!userId){
        res.status(400).json({ status: "FAILED", message: "user Id is missing" });
    }

    try {
        const updatedUser = await userService.updateOneUser(userId, body);
        res.json({ status: "ok", data: updatedUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteOneUser = async (req, res) => {
    const {userId} = req.params;

    if (!userId){
        res.status(400).json({ status: "FAILED", message: "user Id is missing" });
    }

    try {
        const user = await userService.deleteOneUser(userId);
        //res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}