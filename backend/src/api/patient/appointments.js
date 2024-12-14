const express = require('express');
const { getPatientAppointments, createAppointment } = require('../../controllers/appointmentController');
const { validateAppointment } = require('../../validators/appointmentValidator');
const { authenticate, authorize } = require('../../middlewares/roleMiddleware');

const router = express.Router();

router.get('/:patientId', authenticate, authorize(['patient', 'doctor']), getPatientAppointments);
router.post('/', authenticate, authorize(['doctor']), validateAppointment, createAppointment);

module.exports = router;
