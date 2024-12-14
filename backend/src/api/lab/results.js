const express = require('express');
const router = express.Router();
const labRoutes = require('../../routes/labRoutes');

router.use('/', labRoutes);

module.exports = router;
