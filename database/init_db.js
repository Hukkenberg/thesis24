
const pool = require('../backend/src/config/db');
const fs = require('fs');
const path = require('path');

const init = async () => {
    const schemaPath = path.resolve(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf-8');
    try {
        await pool.query(schema);
        console.log('Database initialized successfully');
    } catch (err) {
        console.error('Error initializing database:', err.message);
    } finally {
        pool.end();
    }
};

init();
