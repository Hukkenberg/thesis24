const express = require('express');
const routes = require('./routes');
const { dbConnect } = require('./config/db');
const { authenticate } = require('./middlewares/authMiddleware');
const { authorize } = require('./middlewares/roleMiddleware');

const app = express();

dbConnect();

app.use(express.json());
// Use middleware explicitly if needed globally
app.use(authenticate);
app.use('/api', routes);

module.exports = app;
