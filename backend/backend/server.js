
const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./src/config/db');

const loggerMiddleware = require('./src/middlewares/loggerMiddleware');
const notFoundMiddleware = require('./src/middlewares/notFoundMiddleware');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const authRoutes = require('./src/routes/authRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const doctorRoutes = require('./src/routes/doctorRoutes');
const labRoutes = require('./src/routes/labRoutes');
const patientRoutes = require('./src/routes/patientRoutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/lab', labRoutes);
app.use('/api/patient', patientRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced successfully.');
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection failed:', err.message);
    });
