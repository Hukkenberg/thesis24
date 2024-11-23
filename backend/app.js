
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const patientRoutes = require('./routes/patient');
const doctorRoutes = require('./routes/doctor');
const appointmentRoutes = require('./routes/appointment');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);

module.exports = app;
