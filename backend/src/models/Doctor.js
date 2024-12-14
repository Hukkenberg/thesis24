
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');

const Doctor = sequelize.define('Doctor', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { timestamps: true });

Doctor.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = Doctor;
