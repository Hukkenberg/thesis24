const { DataTypes, Model } = require('sequelize');

class Appointment extends Model {
  static initModel(sequelize) {
    Appointment.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        patient_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        doctor_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        time: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM('scheduled', 'completed', 'canceled'),
          defaultValue: 'scheduled',
        },
        reason: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Appointment',
        timestamps: true,
        tableName: 'appointments',
      }
    );
  }
}

module.exports = Appointment;