const {v4: uuid} = require('uuid');
//require models
const Request = require('../databases/models/Request')

//handle requests
const getAllRequests = () => {
    try{
     const allRequests = Request.find({});
    
     return allRequests;
    
    }catch(error){
          throw error;
    }
}

const getOneRequest = async (requestId) => {
    try{
        const oneRequest = await Request.findById(requestId);
        return oneRequest;
    }catch(error){
        throw error;
    }
}

const createNewRequest = async (newRequest) => {
    try{
        const createdRequest = await Request.create(newRequest);
        await createdRequest.save();
        return createdRequest;
    }catch(error){
        throw error;
    }
}

const updateOneRequest = async (requestId, change) => {
    try{
        const updatedRequest = await Request.updateOne(change).where({id: requestId});
        return updatedRequest;
    }catch(error){
        throw error;
    }
}

const deleteOneRequest = async (requestId) => {
    try{
        const requestDeleted = await Request.findByIdAndDelete(requestId);
        return requestDeleted;

    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllRequests,
    getOneRequest,
    createNewRequest,
    updateOneRequest,
    deleteOneRequest
}