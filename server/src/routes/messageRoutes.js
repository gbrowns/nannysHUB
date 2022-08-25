const express = require("express");
const router = express.Router();

//require controllers
const messageController = require("../controllers/messageController");

//crud operations
router.get("/", messageController.getAllMessages);

router.get("/:textId", messageController.getOneMessage);

router.post("/", messageController.createNewMessage);

router.patch("/:textId", messageController.updateOneMessage);

router.delete("/:textId", messageController.deleteOneMessage);

module.exports = router;