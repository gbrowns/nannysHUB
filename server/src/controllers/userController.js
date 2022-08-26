//require services
const userService = require("../services/messageService");

//handle users
const getUsers = async (req, res) => {
    try {
        const allUsers = await userService.getUsers();
        res.json({ status: "ok", data: allUsers });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err)
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
    const {username, password} = req.body;

    //check inputs are in place
    if (!username || !password ) {
        res.status(400).json({ status: "FAILED", message: "Please fill out all fields" });
    }
    //new user object
    const newUser = {username, password};
    
    try {
        const createdUser = await userService.createNewUser(newUser);
        res.status(201).send({ status: "ok", data: createdUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err)
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
        await userService.deleteOneUser(userId);
        res.json({ status: "ok", message: "User deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}