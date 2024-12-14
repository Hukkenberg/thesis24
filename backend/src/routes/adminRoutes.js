
const express = require('express');
const { getAllAdmins, createAdmin, updateAdmin, deleteAdmin } = require('../controllers/adminController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', authenticate, getAllAdmins);
router.post('/', authenticate, createAdmin);
router.put('/:id', authenticate, updateAdmin);
router.delete('/:id', authenticate, deleteAdmin);

module.exports = router;
