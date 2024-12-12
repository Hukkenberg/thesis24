const express = require('express');
const { getAccountDetails, updateAccount } = require('../controllers/accountController');
const { authenticate } = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', authenticate, getAccountDetails);
router.put('/', authenticate, updateAccount);

module.exports = router;
