const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// Error handling
app.use(errorMiddleware);

module.exports = app;
