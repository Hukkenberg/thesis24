const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Patient = sequelize.define('Patient', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
    allowNull: false,
  },
  diagnosis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  doctorId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: true,
  },
});

Patient.belongsTo(User, { foreignKey: 'doctorId', as: 'doctor' });

module.exports = Patient;
