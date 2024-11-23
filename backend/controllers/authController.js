
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create(name, email, hashedPassword, role);
    res.status(201).json({ message: 'User registered successfully', user });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
};
