
const pool = require('../utils/db');

const LabTest = {
    getAll: async () => {
        const result = await pool.query('SELECT * FROM LabTests');
        return result.rows;
    },
    getById: async (id) => {
        const result = await pool.query('SELECT * FROM LabTests WHERE id = $1', [id]);
        return result.rows[0];
    },
};

module.exports = LabTest;
