const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/:id", userController.getUserById);
router.get("/", userController.getAllUsers);
router.post("/create", userController.createUser);

module.exports = router;
