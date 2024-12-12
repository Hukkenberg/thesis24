// File: backend/src/middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] Error occurred:`, err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
};
