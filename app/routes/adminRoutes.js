const express = require("express");
const router = express.Router();

//require controllers
const adminController = require("../controllers/adminController");
const {verifySignedIn} = require("../middlewares");


//crud operations

router.post("/signup", adminController.createNewAmin);

router.post("/login", adminController.loginAdmin);

/*
router.get("/", adminController.getAllAdmins);

router.get("/:adminId", adminController.getOneAdmin);

router.post("/register", adminController.createNewAmin);

router.post("/login", adminController.loginAdmin);

router.patch("/:adminId", adminController.updateOneAdmin);

router.delete("/:adminId", adminController.deleteOneAdmin);

*/
module.exports = router;