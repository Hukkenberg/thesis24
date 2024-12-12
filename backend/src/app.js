// File: backend/src/app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { dbConnect } = require('./config/db');

const app = express();

dbConnect();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use('/api', routes);

// Add a default route for root path
app.get('/', (req, res) => {
  res.status(200).send('Backend is running!');
});

module.exports = app;
