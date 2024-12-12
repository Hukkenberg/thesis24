const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
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

const runSQLFile = async (filePath) => {
  const sql = fs.readFileSync(filePath, 'utf8');
  await sequelize.query(sql);
};

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');

    console.log('Creating schema...');
    await runSQLFile(path.join(__dirname, '../schema/schema.sql'));

    console.log('Running migrations...');
    await runSQLFile(path.join(__dirname, '../migrations/001_add_email_to_users.sql'));

    console.log('Seeding database...');
    await runSQLFile(path.join(__dirname, '../seeds/001_seed_users.sql'));

    console.log('Database initialized successfully');
  } catch (err) {
    console.error('Error initializing database:', err);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
};

initializeDatabase();
