

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Patient = require('./patients');
const User = require('./users');

const Appointment = sequelize.define('Appointment', {
  patientId: { type: DataTypes.INTEGER, references: { model: Patient, key: 'id' } },
  doctorId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
  appointmentDate: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'pending' },
}, {
  timestamps: true,
});

module.exports = Appointment;