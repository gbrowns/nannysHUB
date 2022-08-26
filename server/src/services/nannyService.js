const {v4: uuid} = require('uuid');
//require models
const Nanny = require('../databases/models/nanny');

//handle users
const getAllNannies = async () => {
    try{
     const nannies = await Nanny.find({});

     return nannies;

    }catch(error){
        throw error;
    }
}

const getOneNanny = async (nannyId) => {
    try{
        const nanny = await Nanny.findById(nannyId);
        return nanny;
    }catch(error){
        throw error;
    }
}

const createNewNanny = async (newNanny) => {
    
    try{
        const createdNanny = await Nanny.create(newNanny);
        await createdNanny.save();
        return createdNanny;
        
    }catch(error){
        throw error;
    }
}

const updateOneNanny = async (nannyId, change) => {
    try{
        const updatedNanny = await Nanny.findByIdAndUpdate({_id: nannyId}, change, {new: true});
        return updatedNanny;
    }catch(error){
        throw error;
    }
}

const deleteOneNanny = async (nannyId) => {
    try{
        await User.findByIdAndDelete(nannyId);
    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllNannies,
    getOneNanny,
    createNewNanny,
    updateOneNanny,
    deleteOneNanny
}