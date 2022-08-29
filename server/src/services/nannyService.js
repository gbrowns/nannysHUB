const {v4: uuid} = require('uuid');
//require models
const Request = require('../databases/models/Request');

//handle users
const getAllNannies = async () => {
    try{
     const nannies = await Request.find({status: "active"});

     return nannies;

    }catch(error){
        throw error;
    }
}

const getOneNanny = async (nannyId) => {
    try{
        const nanny = await Request.findById(nannyId);
        return nanny;
    }catch(error){
        throw error;
    }
}
/*
const createNewNanny = async (newNanny) => {
    
    try{
        const createdNanny = await Request.create(newNanny);
        await createdNanny.save();
        return createdNanny;
        
    }catch(error){
        throw error;
    }
}
*/

const updateOneNanny = async (nannyId, change) => {
    try{
        const updatedNanny = await Request.findByIdAndUpdate({_id: nannyId}, change, {new: true});
        return updatedNanny;
    }catch(error){
        throw error;
    }
}

const deleteOneNanny = async (nannyId) => {
    try{
        await Request.findByIdAndDelete(nannyId);
    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllNannies,
    getOneNanny,
    /*createNewNanny,*/
    updateOneNanny,
    deleteOneNanny
}