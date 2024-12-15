const express = require('express');
const { createAppointment, cancelAppointment, updateAppointment } = require('../controllers/appointments');
const router = express.Router();

router.post('/', createAppointment);
router.delete('/:id', cancelAppointment);
router.put('/:id', updateAppointment);

module.exports = router;