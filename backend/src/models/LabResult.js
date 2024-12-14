
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Patient = require('./Patient');

const LabResult = sequelize.define('LabResult', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  testType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  result: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
}, { timestamps: true });

LabResult.belongsTo(Patient, { foreignKey: 'patientId', onDelete: 'CASCADE' });

module.exports = LabResult;
