const express = require('express');
const {
  getAllPatients,
  createPatient,
  deletePatient,
  updatePatient,
} = require('../controllers/patientController'); // Added updatePatient
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const { validatePatientCreation } = require('../validators/patientValidator');

const router = express.Router();

router.get('/', authenticate, authorize(['doctor', 'admin']), getAllPatients);
router.post('/', authenticate, authorize(['doctor', 'admin']), validatePatientCreation, createPatient);
router.delete('/:id', authenticate, authorize(['doctor', 'admin']), deletePatient);
router.put('/:id', authenticate, authorize(['doctor', 'admin']), validatePatientCreation, updatePatient); // Fixed import

module.exports = router;
