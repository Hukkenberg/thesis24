const express = require("express");
const fileController = require("../controllers/fileController");

const router = express.Router();

router.post("/", fileController.uploadFile);
router.get("/", fileController.getAllFiles);
router.get("/:id", fileController.getFileById);
router.delete("/:id", fileController.deleteFile);

module.exports = router;
