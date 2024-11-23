const express = require("express");
const labController = require("../controllers/labController");

const router = express.Router();

router.get("/", labController.getAllLabTests);
router.post("/", labController.createLabTest);

module.exports = router;
