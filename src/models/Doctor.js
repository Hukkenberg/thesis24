const { DataTypes, Model } = require('sequelize');

class Doctor extends Model {
  static initModel(sequelize) {
    Doctor.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        specialization: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Doctor',
        timestamps: true,
        tableName: 'doctors',
      }
    );
  }
}

module.exports = Doctor;