const { Sequelize } = require('sequelize');

// Get database URL from environment variables
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Disable logging (optional)
  dialectOptions: {
    ssl: {
      require: true, // Enforce SSL connection
      rejectUnauthorized: false, // Allow self-signed certificates (if applicable)
    },
  },
});

sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
