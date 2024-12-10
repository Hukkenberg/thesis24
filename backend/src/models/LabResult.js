const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Patient = require('./Patient');
const User = require('./User');

const LabResult = sequelize.define('LabResult', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  result: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  patientId: {
    type: DataTypes.UUID,
    references: {
      model: Patient,
      key: 'id',
    },
    allowNull: false,
  },
  labTechnicianId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
});

LabResult.belongsTo(Patient, { foreignKey: 'patientId', as: 'patient' });
LabResult.belongsTo(User, { foreignKey: 'labTechnicianId', as: 'labTechnician' });

module.exports = LabResult;
