const express = require("express");
const patientController = require("../controllers/patientController");

const router = express.Router();

router.get("/", patientController.getAllPatients);
router.get("/:id", patientController.getPatientById);
router.post("/", patientController.createPatient);

module.exports = router;
s