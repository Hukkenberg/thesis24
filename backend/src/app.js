const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');
const dbConnect = require('./config/db');

const app = express();

dbConnect();

app.use(express.json());
app.use(middlewares);
app.use('/api', routes);

module.exports = app;
