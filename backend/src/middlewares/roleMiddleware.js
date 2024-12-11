function authorize(roles) {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    next();
  };
}

const roles = {
  ADMIN: 'admin',
  DOCTOR: 'doctor',
  LAB: 'lab',
  PATIENT: 'patient',
};

module.exports = { authorize, roles };
