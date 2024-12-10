exports.validateLabResultUpdate = (req, res, next) => {
  const { result } = req.body;
  if (!result || typeof result !== 'string') {
    return res.status(400).json({ error: 'Result must be a non-empty string' });
  }
  next();
};
