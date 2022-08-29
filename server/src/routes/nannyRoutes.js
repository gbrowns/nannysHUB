const express = require("express");
const router = express.Router();

//require controllers
const nannyController = require("../controllers/nannyController");

//crud operations
router.get("/", nannyController.getAllNannies);

router.get("/:nannyId", nannyController.getOneNanny);

//router.post("/", nannyController.createNewNanny);

router.patch("/:nannyId", nannyController.updateOneNanny);

router.delete("/:nannyId", nannyController.deleteOneNanny);


module.exports = router;