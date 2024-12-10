exports.validatePatientCreation = (req, res, next) => {
  const { name, age, gender } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Name is required and must be a string' });
  }
  if (!age || typeof age !== 'number' || age <= 0) {
    return res.status(400).json({ error: 'Age must be a positive number' });
  }
  if (!gender || !['male', 'female', 'other'].includes(gender)) {
    return res.status(400).json({ error: 'Gender must be male, female, or other' });
  }
  next();
};
