const { body, validationResult } = require('express-validator');

exports.validateAppointment = [
  body('date').isISO8601().toDate().withMessage('Invalid date format'),
  body('doctorId').isUUID().withMessage('Valid doctor ID is required'),
  body('patientId').isUUID().withMessage('Valid patient ID is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
