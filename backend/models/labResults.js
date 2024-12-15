const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LabResult = sequelize.define('LabResult', {
  patientId: { type: DataTypes.INTEGER, allowNull: false },
  testType: { type: DataTypes.STRING, allowNull: false },
  result: { type: DataTypes.TEXT, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
}, {
  timestamps: true,
});

module.exports = LabResult;