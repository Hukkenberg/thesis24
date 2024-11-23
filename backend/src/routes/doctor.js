const express = require("express");
const {
  getDoctorInfo,
  updateDoctorInfo,
  getPatients,
  addProgress,
} = require("../controllers/doctorController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/info", authMiddleware, getDoctorInfo);
router.put("/info", authMiddleware, updateDoctorInfo);
router.get("/patients", authMiddleware, getPatients);
router.post("/progress", authMiddleware, addProgress);

module.exports = router;
