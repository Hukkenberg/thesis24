exports.validatePatientUpdate = (req, res, next) => {
  const { name, age } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).send("Invalid 'name' field");
  }
  if (!age || typeof age !== 'number') {
    return res.status(400).send("Invalid 'age' field");
  }
  next();
};
