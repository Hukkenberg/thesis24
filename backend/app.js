
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const { sequelize } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes); // Corrected route for auth
app.use('/api', dashboardRoutes); // Dashboard route

sequelize.sync().then(() => {
  console.log('Database synced successfully');
}).catch((error) => {
  console.error('Database sync failed:', error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
