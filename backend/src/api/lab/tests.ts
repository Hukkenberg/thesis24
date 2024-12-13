const express = require('express');
const { Test } = require('../../models/test');
const { authMiddleware } = require('../../middlewares');

const router = express.Router();

// Fetch all tests
router.get('/', authMiddleware, async (req, res) => {
    try {
        const tests = await Test.findAll();
        res.status(200).json(tests);
    } catch (error) {
        res.status(500).send('Error fetching tests');
    }
});

module.exports = router;
