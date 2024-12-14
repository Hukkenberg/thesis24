
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Patient = require('./Patient');
const Doctor = require('./Doctor');

const Prescription = sequelize.define('Prescription', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  medications: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
}, { timestamps: true });

Prescription.belongsTo(Patient, { foreignKey: 'patientId', onDelete: 'CASCADE' });
Prescription.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE' });

module.exports = Prescription;
