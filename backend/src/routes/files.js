const express = require("express");
const { uploadFile, downloadFile } = require("../controllers/fileController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/upload", authMiddleware, uploadFile);
router.get("/download/:id", authMiddleware, downloadFile);

module.exports = router;
