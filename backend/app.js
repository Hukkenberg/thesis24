
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());

// Verify database connection
sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the process if the database connection fails
  });

// Sync database models
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synchronized');
}).catch(error => {
  console.error('Error syncing database:', error);
});

// Routes setup (Add your routes below)
// Example:
// app.use('/auth', require('./routes/auth'));

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
