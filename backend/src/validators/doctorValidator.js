const { body, validationResult } = require('express-validator');

exports.validateDoctorCreation = [
  body('name').isString().withMessage('Name must be a string'),
  body('specialization').isString().withMessage('Specialization is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
