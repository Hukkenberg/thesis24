
const authService = require('../services/authService');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }
        const token = await authService.login(email, password);
        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};

const register = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: 'Name, email, password, and role are required.' });
        }
        const user = await authService.register({ name, email, password, role });
        res.status(201).json({ message: 'User registered successfully.', user });
    } catch (error) {
        next(error);
    }
};

const verifyToken = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }
        const user = await authService.verifyToken(token);
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login,
    register,
    verifyToken,
};
