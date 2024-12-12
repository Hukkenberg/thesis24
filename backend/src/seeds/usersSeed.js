// File: backend/src/seeds/usersSeed.js
const bcrypt = require('bcryptjs');
const { sequelize } = require('../config/db');
const User = require('../models/User');

const users = [
  { name: 'Admin', email: 'admin@example.com', password: 'Admin123!', role: 'admin' },
  { name: 'Doctor', email: 'doctor_user@example.com', password: 'Doctor123!', role: 'doctor' },
  { name: 'Lab', email: 'lab_user@example.com', password: 'Lab123!', role: 'lab' },
  { name: 'Patient One', email: 'patient_one@example.com', password: 'Patient123!', role: 'patient' },
  { name: 'Patient Two', email: 'patient_two@example.com', password: 'Patient123!', role: 'patient' },
  { name: 'Patient Three', email: 'patient_three@example.com', password: 'Patient123!', role: 'patient' },
];

const seedUsers = async () => {
  try {
    await sequelize.sync({ force: true });
    for (const user of users) {
      user.password = await bcrypt.hash(user.password, 10);
      await User.create(user);
    }
    console.log('User seed completed');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    await sequelize.close();
  }
};

seedUsers();
