const {v4: uuid} = require('uuid');
//require models
const Request = require('../database/Request');

//handle requests
const getAllRequests = () => {
    try{
     const allRequests = Request.getAllRequests();
    
     return allRequests;
    
    }catch(error){
          throw error;
    }
}

const getOneRequest = (requestId) => {
    try{
        const oneRequest = Request.getOneRequest(requestId);
        return oneRequest;
    }catch(error){
        throw error;
    }
}

const createNewRequest = (newRequest) => {
    const requestToInsert = {
        ...newRequest,
        id: uuid(),
        createdAt: new Date().toLocaleTimeString,
        updatedAt: new Date().toLocaleTimeString
    }
    try{
        const createdRequest = Request.createNewRequest(requestToInsert);
        return createdRequest;
    }catch(error){
        throw error;
    }
}

const updateOneRequest = (requestId, change) => {
    try{
        const updatedRequest = Request.updateOneRequest(requestId, change);
        return updatedRequest;
    }catch(error){
        throw error;
    }
}

const deleteOneRequest = (requestId) => {
    try{
        const requestDeleted = Request.deleteOneRequest(requestId);
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