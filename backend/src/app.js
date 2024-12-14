const express = require('express');
const { dbConnect } = require('./config/db');
const routes = require('./routes');

const app = express();

app.use(express.json());

dbConnect();

app.use('/api', routes);

app.get('/', (req, res) => {
  res.status(200).send('API is running');
});

module.exports = app;
