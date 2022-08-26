const {v4: uuid} = require('uuid');
//require models
const User = require('../databases/models/User');

//handle users
const getUsers = async () => {
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
    
    try{
        const createdUser = await User.create(newUser);
        await createdUser.save();
        return createdUser;
    }catch(error){
        throw error;
    }
}

const updateOneUser = async (userId, change) => {
    try{
        const updatedUser = await User.findByIdAndUpdate({_id: userId}, change, {new: true});
        return updatedUser;
    }catch(error){
        throw error;
    }
}

const deleteOneUser = async (userId) => {
    try{
        await User.findByIdAndDelete(userId);
    }catch(error){
        throw error;
    }
}

module.exports = {
    getUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
    
}