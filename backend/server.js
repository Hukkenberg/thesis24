
require('dotenv').config();
const express = require('express');
const { sequelize } = require('./config/database');
const patientRoutes = require('./src/routes/patientRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api', patientRoutes); // Mount patient routes

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Base route
app.get('/', (req, res) => {
  res.send('Patient Management Backend is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
