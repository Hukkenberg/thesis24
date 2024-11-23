
const pool = require('../utils/db');

const Patient = {
    getAll: async () => {
        const result = await pool.query('SELECT * FROM Patients');
        return result.rows;
    },
    getById: async (id) => {
        const result = await pool.query('SELECT * FROM Patients WHERE id = $1', [id]);
        return result.rows[0];
    },
};

module.exports = Patient;
