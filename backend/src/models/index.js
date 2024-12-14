const { sequelize } = require('../config/db');

// Import all models
const User = require('./User');
const Patient = require('./Patient');
const Doctor = require('./Doctor');
const LabResult = require('./LabResult');
const Appointment = require('./Appointment');
const Prescription = require('./Prescription');

// Define relationships
User.hasOne(Patient, { foreignKey: 'userId', onDelete: 'CASCADE' });
Patient.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(Doctor, { foreignKey: 'userId', onDelete: 'CASCADE' });
Doctor.belongsTo(User, { foreignKey: 'userId' });

Patient.hasMany(Appointment, { foreignKey: 'patientId', onDelete: 'CASCADE' });
Appointment.belongsTo(Patient, { foreignKey: 'patientId' });

Doctor.hasMany(Appointment, { foreignKey: 'doctorId', onDelete: 'CASCADE' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctorId' });

Patient.hasMany(LabResult, { foreignKey: 'patientId', onDelete: 'CASCADE' });
LabResult.belongsTo(Patient, { foreignKey: 'patientId' });

Patient.hasMany(Prescription, { foreignKey: 'patientId', onDelete: 'CASCADE' });
Prescription.belongsTo(Patient, { foreignKey: 'patientId' });

Doctor.hasMany(Prescription, { foreignKey: 'doctorId', onDelete: 'CASCADE' });
Prescription.belongsTo(Doctor, { foreignKey: 'doctorId' });

// Export all models and sequelize instance
module.exports = {
  sequelize,
  User,
  Patient,
  Doctor,
  LabResult,
  Appointment,
  Prescription,
};
