const express = require("express");
const router = express.Router();

//require controllers
const userController = require("../controllers/userController");

//crud operations
router.get("/", userController.getUsers);

router.get("/:userId", userController.getOneUser);

router.post("/", userController.createNewUser);

router.patch("/:userId", userController.updateOneUser);

router.delete("/:userId", userController.deleteOneUser);


module.exports = router;