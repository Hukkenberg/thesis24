const express = require('express');
const { getPatients, updateDiagnosis } = require('../controllers/doctorController');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/patients', authenticate, authorize(['doctor']), getPatients);
router.put('/patients/:id/diagnosis', authenticate, authorize(['doctor']), updateDiagnosis);

module.exports = router;
