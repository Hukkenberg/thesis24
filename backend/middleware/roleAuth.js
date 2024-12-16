
module.exports = function roleAuth(allowedRoles) {
  return (req, res, next) => {
    const { role } = req.user; // Ensure role comes from the decoded JWT

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ error: 'Access denied: Insufficient permissions' });
    }

    next();
  };
};
