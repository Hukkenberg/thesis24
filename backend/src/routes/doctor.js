const express = require("express");
const doctorController = require("../controllers/doctorController");

const router = express.Router();

router.get("/:id", doctorController.getDoctorById);
router.post("/", doctorController.createDoctor);
router.get("/", doctorController.getAllDoctors);

module.exports = router;
