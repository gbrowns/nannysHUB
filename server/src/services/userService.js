const {v4: uuid} = require('uuid');
//require models
const User = require('../databases/models/User');

//handle users
const getAllUsers = async () => {
    try{
     const allUsers = await User.find({});

     return allUsers;

    }catch(error){
        throw error;
    }
}

const getOneUser = async (userId) => {
    try{
        const oneUser = await User.findById(userId);
        return oneUser;
    }catch(error){
        throw error;
    }
}

const createNewUser = async (newUser) => {
    
    /*const userToInsert = {
        ...newUser,
        id: uuid(),
        createdAt: new Date().toLocaleTimeString,
        updatedAt: new Date().toLocaleTimeString
    }*/
    
    try{
        const createdUser = User.create(newUser);
        await createdUser.save();
        return createdUser;
    }catch(error){
        throw error;
    }
}

const updateOneUser = async (userId, change) => {
    try{
        const updatedUser = await User.updateOne(change).where({id: userId});
        return updatedUser;
    }catch(error){
        throw error;
    }
}

const deleteOneUser = async (userId) => {
    try{
        const userDeleted = await User.findByIdAndDelete(userId);
        return userDeleted;
    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
    
}