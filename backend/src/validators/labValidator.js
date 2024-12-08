exports.validateLabReport = (req, res, next) => {
  const { reportDetails } = req.body;
  if (!reportDetails || typeof reportDetails !== 'string') {
    return res.status(400).send("Invalid 'reportDetails' field");
  }
  next();
};
