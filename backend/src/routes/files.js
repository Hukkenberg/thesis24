const express = require("express");
const { uploadFile, getFiles, deleteFile } = require("../controllers/fileController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, uploadFile);
router.get("/", authMiddleware, getFiles);
router.delete("/:id", authMiddleware, deleteFile);

module.exports = router;
