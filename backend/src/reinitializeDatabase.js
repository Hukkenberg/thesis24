require('dotenv').config();
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

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

const reinitializeDatabase = async () => {
  const hashedPassword = await bcrypt.hash('123456!@#$%^Aa', 12);

  await sequelize.query(`
    DROP TABLE IF EXISTS "Users";

    CREATE TABLE "Users" (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(50) NOT NULL DEFAULT 'patient',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO "Users" (name, email, password, role) VALUES
    ('Admin User', 'admin@example.com', '${hashedPassword}', 'admin'),
    ('Doctor User', 'doctor@example.com', '${hashedPassword}', 'doctor'),
    ('Lab User', 'lab@example.com', '${hashedPassword}', 'lab'),
    ('Patient User', 'patient@example.com', '${hashedPassword}', 'patient'),
    ('Patient Two', 'patient2@example.com', '${hashedPassword}', 'patient'),
    ('Patient Three', 'patient3@example.com', '${hashedPassword}', 'patient');
  `);

  console.log('Database reinitialized and users updated successfully.');
};

reinitializeDatabase()
  .catch((err) => console.error('Error:', err))
  .finally(() => sequelize.close());
