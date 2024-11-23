const express = require("express");
const {
  getPatientInfo,
  updatePatientInfo,
  getProgress,
  getAppointments,
} = require("../controllers/patientController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/info", authMiddleware, getPatientInfo);
router.put("/info", authMiddleware, updatePatientInfo);
router.get("/progress", authMiddleware, getProgress);
router.get("/appointments", authMiddleware, getAppointments);

module.exports = router;
