
const app = require('./app');
const sequelize = require('./src/config/db');

const PORT = process.env.PORT || 5000;

// Sync database and start server
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database connected successfully.');
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to the database:', err.message);
    });
