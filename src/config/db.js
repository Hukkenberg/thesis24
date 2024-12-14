
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  logging: process.env.DB_LOGGING === 'true',
});

const connectDB = async () => {
  let retries = 5;
  while (retries) {
    try {
      await sequelize.authenticate();
      console.log('Database connected successfully.');
      break;
    } catch (error) {
      console.error(`Database connection failed: ${error.message}`);
      retries -= 1;
      console.log(`Retrying... (${5 - retries}/5)`);
      await new Promise((res) => setTimeout(res, 5000)); // Wait 5 seconds before retrying
    }
  }

  if (!retries) process.exit(1);
};

module.exports = { sequelize, connectDB };
