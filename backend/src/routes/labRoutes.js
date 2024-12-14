const express = require('express');
const { getAllLabReports, getLabReportById, createLabReport, updateLabReport, deleteLabReport } = require('../controllers/labController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', authenticate, getAllLabReports);
router.get('/:id', authenticate, getLabReportById);
router.post('/', authenticate, createLabReport);
router.put('/:id', authenticate, updateLabReport);
router.delete('/:id', authenticate, deleteLabReport);

module.exports = router;
