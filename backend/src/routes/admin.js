const express = require("express");
const {
  createDoctor,
  deleteDoctor,
  createLabStaff,
  deleteLabStaff,
} = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/doctor", authMiddleware, createDoctor);
router.delete("/doctor/:id", authMiddleware, deleteDoctor);
router.post("/lab-staff", authMiddleware, createLabStaff);
router.delete("/lab-staff/:id", authMiddleware, deleteLabStaff);

module.exports = router;
