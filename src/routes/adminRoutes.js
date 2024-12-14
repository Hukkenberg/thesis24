const express = require('express');
const {
  getUsers,
  createUser,
  deleteUser,
} = require('../controllers/adminController');
const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.delete('/users/:userId', deleteUser);

module.exports = router;