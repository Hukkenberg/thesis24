module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LabResults', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      result: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      patientId: {
        type: Sequelize.UUID,
        references: {
          model: 'Patients',
          key: 'id',
        },
        allowNull: false,
      },
      labTechnicianId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('LabResults');
  },
};
