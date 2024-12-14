
const { body, validationResult } = require('express-validator');

exports.validatePatientCreation = [
  body('name').isString().withMessage('Name must be a string'),
  body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer'),
  body('gender').isIn(['male', 'female', 'other']).withMessage('Gender is invalid'),
  body('doctorId').isUUID().withMessage('Doctor ID must be a valid UUID'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
