const express = require("express");
const patientController = require("../controllers/patientController");

const router = express.Router();

router.post("/", patientController.createPatient);
router.get("/:id", patientController.getPatientById);
router.get("/", patientController.getAllPatients);

module.exports = router;
