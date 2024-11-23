const express = require("express");
const labController = require("../controllers/labController");

const router = express.Router();

router.get("/", labController.getAllLabTests);
router.get("/:id", labController.getLabTestById);
router.post("/", labController.createLabTest);
router.put("/:id", labController.updateLabTest);
router.delete("/:id", labController.deleteLabTest);

module.exports = router;
