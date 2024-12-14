
const express = require('express');
const { getAccountDetails, updateAccount } = require('../controllers/accountController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/details', authenticate, getAccountDetails);
router.put('/update', authenticate, updateAccount);

module.exports = router;
