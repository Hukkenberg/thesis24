const { Sequelize } = require('sequelize');
const { DATABASE_URL } = require('./environment');

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }
};

module.exports = { sequelize, dbConnect };
