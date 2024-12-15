const { Pool } = require('pg');

const db = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432,
    ssl: {
        rejectUnauthorized: false // Disable strict SSL validation for hosted environments
    }
});

db.connect((err) => {
    if (err) {
        console.error("Connection error:", err.stack);
        throw err;
    }
    console.log("PostgreSQL connected");
});

module.exports = db;
