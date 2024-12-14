const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.get('/patients', adminController.getAllPatients);
router.post('/manage-account', adminController.manageAccount);

module.exports = router;
