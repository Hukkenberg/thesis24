const sequelize = require('./src/config/db');

const initDB = async () => {
  try {
    await sequelize.sync({ force: true }); // Drops and recreates tables
    console.log('Database initialized successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Failed to initialize database:', err);
    process.exit(1);
  }
};

initDB();
