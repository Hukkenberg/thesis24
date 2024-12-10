const express = require('express');
const { getAccountDetails } = require('../controllers/accountController');
const router = express.Router();

router.get('/', getAccountDetails);

module.exports = router;
