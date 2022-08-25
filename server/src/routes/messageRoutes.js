const express = require("express");
const router = express.Router();

//require controllers
const messageController = require("../controllers/messageController");

//crud operations
router.get("/", messageController.getAllMessages);

router.get("/:adminId", messageController.getOneMessage);

router.post("/", messageController.createNewMessage);

router.patch("/:adminId", messageController.updateOneMessage);

router.delete("/:adminId", messageController.deleteOneMessage);

module.exports = router;