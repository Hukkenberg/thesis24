const express = require('express');
const { getDoctors, createDoctor } = require('../../controllers/doctorController');
const { validateDoctorCreation } = require('../../validators/doctorValidator');
const { authenticate, authorize } = require('../../middlewares/roleMiddleware');

const router = express.Router();

router.get('/', authenticate, authorize(['admin']), getDoctors);
router.post('/', authenticate, authorize(['admin']), validateDoctorCreation, createDoctor);

module.exports = router;
