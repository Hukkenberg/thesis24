const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.post("/create", adminController.createAdmin);
router.get("/list", adminController.listAdmins);

module.exports = router;
