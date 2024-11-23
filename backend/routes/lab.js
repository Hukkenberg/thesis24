
const express = require('express');
const { getAllLabTests, getLabTestById } = require('../controllers/labController');
const router = express.Router();

router.get('/', getAllLabTests);
router.get('/:id', getLabTestById);

module.exports = router;
