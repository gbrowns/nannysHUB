const express = require("express");
const router = express.Router();

//require controllers
const adminController = require("../controllers/adminController");

//crud operations
router.get("/", adminController.getAllAdmins);

router.get("/:adminId", adminController.getOneAdmin);

router.post("/", adminController.createNewAmin);

router.patch("/:adminId", adminController.updateOneAdmin);

router.delete("/:adminId", adminController.deleteOneAdmin);


module.exports = router;