
const express = require('express');
const { getAllDoctors, createDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctorController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', authenticate, getAllDoctors);
router.post('/', authenticate, createDoctor);
router.put('/:id', authenticate, updateDoctor);
router.delete('/:id', authenticate, deleteDoctor);

module.exports = router;
