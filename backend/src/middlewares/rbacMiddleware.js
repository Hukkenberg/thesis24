const rbacMiddleware = (allowedRoles) => (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access forbidden: insufficient permissions' });
    }
    next();
};

module.exports = { rbacMiddleware };
