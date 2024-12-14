
const express = require('express');
const {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} = require('../controllers/patientController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', authenticate, getAllPatients);
router.get('/:id', authenticate, getPatientById);
router.post('/', authenticate, createPatient);
router.put('/:id', authenticate, updatePatient);
router.delete('/:id', authenticate, deletePatient);

module.exports = router;
