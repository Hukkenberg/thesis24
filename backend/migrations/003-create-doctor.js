module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('doctors', {
          id: {
              type: Sequelize.UUID,
              defaultValue: Sequelize.fn('gen_random_uuid'),
              primaryKey: true,
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          specialization: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          experience: {
              type: Sequelize.INTEGER,
              allowNull: false,
          },
          created_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('NOW'),
          },
          updated_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('NOW'),
          },
      });
  },
  down: async (queryInterface) => {
      await queryInterface.dropTable('doctors');
  },
};
