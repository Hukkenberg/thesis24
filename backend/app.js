
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes and models
const authRoutes = require('./routes/auth');
const sequelize = require('./config/database');
const User = require('./models/users');

// Use routes
app.use('/api/auth', authRoutes);

// Sync database
sequelize.sync({ alter: true }) // Alter sync ensures schema matches the model
  .then(() => console.log('Database synced successfully'))
  .catch(err => console.error('Database sync error:', err));

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
