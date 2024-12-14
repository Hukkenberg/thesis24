const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, // Requires hashed password
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'patient',
  },
}, {
  tableName: 'Users',
  timestamps: true,
});

module.exports = User;
