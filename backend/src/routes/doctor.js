const express = require("express");
const { getPatients, getAppointments, updateProgress } = require("../controllers/doctorController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/patients", authMiddleware, getPatients);
router.get("/appointments", authMiddleware, getAppointments);
router.post("/progress", authMiddleware, updateProgress);

module.exports = router;
