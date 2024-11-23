const express = require("express");
const labController = require("../controllers/labController");

const router = express.Router();

router.post("/create", labController.createLabTest);
router.get("/:id", labController.getLabTestById);
router.get("/", labController.getAllLabTests);

module.exports = router;
