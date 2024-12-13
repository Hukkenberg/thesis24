const express = require('express');
const { authMiddleware, rbacMiddleware } = require('../../middlewares');
const { User } = require('../../models/user');
const router = express.Router();

// Fetch all users
router.get('/', authMiddleware, rbacMiddleware(['admin']), async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send('Error fetching users');
    }
});

// Create new user
router.post('/', authMiddleware, rbacMiddleware(['admin']), async (req, res) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const user = await User.create({ name, email, password, role });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).send('Error creating user');
    }
});

// Delete user
router.delete('/:id', authMiddleware, rbacMiddleware(['admin']), async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).send('User not found');

        await user.destroy();
        res.status(200).send('User deleted');
    } catch (err) {
        res.status(500).send('Error deleting user');
    }
});

module.exports = router;
