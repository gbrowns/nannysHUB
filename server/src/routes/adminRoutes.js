const express = require("express");
const router = express.Router();

//require controllers
const adminController = require("../controllers/adminController");

//crud operations
router.get("/", adminController.getAllAdmins);

//registered admin
router.get("/:adminId", adminController.getOneAdmin);

router.post("/", adminController.createNewAdmin);

//update admin
router.patch("/:adminId", adminController.updateOneAdmin);

router.delete("/:adminId", adminController.deleteOneAdmin);