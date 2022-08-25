const {v4: uuid} = require('uuid');
//require models
const Users = require('../database/Users');

//handle users
const getAllUsers = () => {
    try{
     const allUsers = Users.getAllUsers();

     return allUsers;

    }catch(error){
         throw error;
    }
}

const getOneUser = (userId) => {
    try{
        const oneUser = Users.getOneUser(userId);
        return oneUser;
    }catch(error){
        throw error;
    }
}

const createNewUser = (newUser) => {
    
    const userToInsert = {
        ...newUser,
        id: uuid(),
        createdAt: new Date().toLocaleTimeString,
        updatedAt: new Date().toLocaleTimeString
    }
    
    try{
        const createdUser = Users.createNewUser(userToInsert);
        return createdUser;
    }catch(error){
        throw error;
    }
}

const updateOneUser = (userId, change) => {
    try{
        const updatedUser = Users.updateOneUser(userId, change);
        return updatedUser;
    }catch(error){
        throw error;
    }
}

const deleteOneUser = (userId) => {
    try{
        const userDeleted = Users.deleteOneUser(userId);
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