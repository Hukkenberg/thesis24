const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { dbConnect } = require('./config/db');
const { authenticate } = require('./middlewares/authenticate');
const { authorize } = require('./middlewares/roleMiddleware');

const app = express();

dbConnect();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(authenticate);
app.use('/api', routes);

module.exports = app;
