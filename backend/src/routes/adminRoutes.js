const express = require('express');
const { getAllUsers, manageRoles } = require('../controllers/adminController');
const router = express.Router();

router.get('/users', getAllUsers);
router.put('/roles', manageRoles);

module.exports = router;
