const express = require("express");
const { getLabTests, updateLabTest } = require("../controllers/labController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/tests", authMiddleware, getLabTests);
router.put("/tests", authMiddleware, updateLabTest);

module.exports = router;
