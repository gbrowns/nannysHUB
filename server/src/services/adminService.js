const { v4: uuid } = require('uuid');
//require models
const Admin = require('../databases/models/Admin');

//handle users
const getAllAdmins = async () => {
    try {
        const admins = await Admin.find({});

        return admins;

    } catch (error) {
        throw error;
    }
}

const getOneAdmin = async (adminId) => {
    try {
        const admin = await Admin.findById(adminId);
        return admin;
    } catch (error) {
        throw error;
    }
}

const createNewAdmin = async (newAdmin) => {

    try {
        const createdAdmin = await Admin.create(newAdmin);
        await createdAdmin.save();
        return createdAdmin;

    } catch (error) {
        throw error;
    }
}

const updateOneAdmin = async (adminId, change) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate({ _id: adminId }, change, { new: true });
        return updatedAdmin;
    } catch (error) {
        throw error;
    }
}

const deleteOneAdmin = async (adminId) => {
    try {
        await Admin.findByIdAndDelete(adminId);
    } catch (error) {
        throw error;
    }
}

const loginAdmin = async (email) => {
     
    try {
        const admin = await Admin.findOne({ email });
        return admin;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    getAllAdmins,
    getOneAdmin,
    createNewAdmin,
    updateOneAdmin,
    deleteOneAdmin,
    loginAdmin
}