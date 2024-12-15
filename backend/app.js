
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const loggerMiddleware = require('./src/middlewares/loggerMiddleware');
const notFoundMiddleware = require('./src/middlewares/notFoundMiddleware');
const errorMiddleware = require('./src/middlewares/errorMiddleware');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use('/api/admin', require('./src/routes/adminRoutes'));
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/doctor', require('./src/routes/doctorRoutes'));
app.use('/api/lab', require('./src/routes/labRoutes'));
app.use('/api/patient', require('./src/routes/patientRoutes'));

// Error handling
app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
