
const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const authRoutes = require('./routes/auth');

// CORS Configuration
const corsOptions = {
  origin: ['https://thesis24-web.onrender.com'], // Allow frontend domain
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions)); // Apply CORS
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
