const express = require("express");
const fileController = require("../controllers/fileController");

const router = express.Router();

router.post("/", fileController.uploadFile);
router.get("/:id", fileController.getFileById);

module.exports = router;
