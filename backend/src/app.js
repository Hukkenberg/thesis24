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

app.use((req, res) => {
  res.status(404).send('Route not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
