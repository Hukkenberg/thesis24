const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
});

// Import các mô hình
const User = require('./User');
const Patient = require('./Patient');
const Doctor = require('./Doctor');
const LabResult = require('./LabResult');
const Appointment = require('./Appointment');

User.initModel(sequelize);
Patient.initModel(sequelize);
Doctor.initModel(sequelize);
LabResult.initModel(sequelize);
Appointment.initModel(sequelize);

module.exports = {
  sequelize,
  User,
  Patient,
  Doctor,
  LabResult,
  Appointment,
};