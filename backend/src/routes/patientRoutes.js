const express = require('express');
const {
  getAllPatients,
  createPatient,
  deletePatient,
  updatePatient,
} = require('../controllers/patientController');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/roleMiddleware');
const { validatePatientCreation } = require('../validators/patientValidator');

const router = express.Router();

router.get('/', authenticate, authorize(['doctor', 'admin']), getAllPatients);
router.post('/', authenticate, authorize(['doctor', 'admin']), validatePatientCreation, createPatient);
router.delete('/:id', authenticate, authorize(['doctor', 'admin']), deletePatient);
router.put('/:id', authenticate, authorize(['doctor', 'admin']), validatePatientCreation, updatePatient);

module.exports = router;
