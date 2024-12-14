const { body, validationResult } = require('express-validator');

exports.validateLabResult = [
  body('result').isString().notEmpty().withMessage('Result is required'),
  body('patientId').isUUID().withMessage('Valid patient ID is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
