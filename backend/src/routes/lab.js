const express = require("express");
const {
  getLabTests,
  createLabTest,
  updateLabTest,
} = require("../controllers/labController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getLabTests);
router.post("/", authMiddleware, createLabTest);
router.put("/:id", authMiddleware, updateLabTest);

module.exports = router;
