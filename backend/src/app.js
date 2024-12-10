const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const adminRoutes = require('./routes/adminRoutes');
const labRoutes = require('./routes/labRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/admins', adminRoutes);
app.use('/labs', labRoutes);
app.use('/api/appointments', appointmentRoutes);

module.exports = app;
