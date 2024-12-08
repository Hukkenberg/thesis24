exports.validateRegister = (req, res, next) => {
  const { username, password, role } = req.body;
  if (!username || typeof username !== 'string') {
    return res.status(400).send("Invalid 'username' field");
  }
  if (!password || typeof password !== 'string') {
    return res.status(400).send("Invalid 'password' field");
  }
  if (!role || typeof role !== 'string') {
    return res.status(400).send("Invalid 'role' field");
  }
  next();
};
