const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Ensure the correct import
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const adminRoutes = require('./routes/adminRoutes');
const labRoutes = require('./routes/labRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes); // Use the router instance here
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/admins', adminRoutes);
app.use('/labs', labRoutes);

module.exports = app;
