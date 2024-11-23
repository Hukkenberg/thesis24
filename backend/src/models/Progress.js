const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Progress = sequelize.define("Progress", {
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Progress;
