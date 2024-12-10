// backend/src/middlewares/notificationMiddleware.js
const { notifyUser } = require('../services/notificationService');

exports.notifyOnAppointmentUpdate = async (req, res, next) => {
  try {
    const { patientId, status } = req.body;
    await notifyUser(patientId, `Your appointment status changed to ${status}`);
    next();
  } catch (err) {
    next(err);
  }
};
s