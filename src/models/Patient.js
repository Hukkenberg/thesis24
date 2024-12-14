const { DataTypes, Model } = require('sequelize');

class Patient extends Model {
  static initModel(sequelize) {
    Patient.init(
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
        age: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        gender: {
          type: DataTypes.ENUM('male', 'female', 'other'),
          allowNull: false,
        },
        medical_history: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        symptoms: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Patient',
        timestamps: true,
        tableName: 'patients',
      }
    );
  }
}

module.exports = Patient;