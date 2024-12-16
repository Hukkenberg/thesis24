
const express = require("express");
const router = express.Router();

const loginRoute = require("./auth/login");

router.post("/auth/login", loginRoute); // Ensure this route is registered

module.exports = router;
