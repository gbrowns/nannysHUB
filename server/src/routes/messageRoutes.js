const express = require("express");
const router = express.Router();

//require controllers
const messageController = require("../controllers/messageController");

//crud operations
router.get("/", messageController.getAllMessages);

router.get("/:messageId", messageController.getOneMessage);

router.post("/", messageController.createNewMessage);

router.patch("/:messageId", messageController.updateOneMessage);

router.delete("/:messageId", messageController.deleteOneMessage);

module.exports = router;