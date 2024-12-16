
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const patientsRoutes = require('./routes/patients');
const labResultsRoutes = require('./routes/labResults');
const adminToolsRoutes = require('./routes/adminTools');
const auth = require('./middleware/auth');
const roleAuth = require('./middleware/roleAuth');
const { sequelize } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes); // Authentication route
app.use('/api/dashboard', auth, dashboardRoutes); // Protect dashboard route

app.use('/api/patients', auth, roleAuth(['doctor', 'admin']), patientsRoutes);
app.use('/api/lab-results', auth, roleAuth(['lab', 'admin']), labResultsRoutes);
app.use('/api/admin/tools', auth, roleAuth(['admin']), adminToolsRoutes);

// Database sync
sequelize.sync().then(() => {
  console.log('Database synced successfully');
}).catch((error) => {
  console.error('Database sync failed:', error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
