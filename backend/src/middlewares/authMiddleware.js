
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
};

const isDoctor = (req, res, next) => {
  if (req.user && req.user.role === 'doctor') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied: Doctors only' });
  }
};

const isLabTechnician = (req, res, next) => {
  if (req.user && req.user.role === 'lab_technician') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied: Lab Technicians only' });
  }
};

const isAdminOrDoctor = (req, res, next) => {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'doctor')) {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied: Admins or Doctors only' });
  }
};

const isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized: Please log in' });
  }
};

module.exports = { isAdmin, isDoctor, isLabTechnician, isAdminOrDoctor, isAuthenticated };
