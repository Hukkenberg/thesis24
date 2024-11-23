const User = require('./User');
const Doctor = require('./Doctor');
const Patient = require('./Patient');
const Appointment = require('./Appointment');
const LabTest = require('./LabTest');
const File = require('./File');
const Progress = require('./Progress');

// User-Patient Relationship
User.hasOne(Patient, { foreignKey: 'userId', onDelete: 'CASCADE' });
Patient.belongsTo(User, { foreignKey: 'userId' });

// Doctor-Appointment Relationship
Doctor.hasMany(Appointment, { foreignKey: 'doctorId' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctorId' });

// Patient-Appointment Relationship
Patient.hasMany(Appointment, { foreignKey: 'patientId' });
Appointment.belongsTo(Patient, { foreignKey: 'patientId' });

// Patient-LabTest Relationship
Patient.hasMany(LabTest, { foreignKey: 'patientId' });
LabTest.belongsTo(Patient, { foreignKey: 'patientId' });

// Patient-Progress Relationship
Patient.hasMany(Progress, { foreignKey: 'patientId' });
Progress.belongsTo(Patient, { foreignKey: 'patientId' });

module.exports = {
  User,
  Doctor,
  Patient,
  Appointment,
  LabTest,
  File,
  Progress,
};
