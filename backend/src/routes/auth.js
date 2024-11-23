const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// Ensure these functions are properly exported from authController
router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/logout", authController.logout);

module.exports = router;
