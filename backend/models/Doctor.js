
const pool = require('../utils/db');

const Doctor = {
    getAll: async () => {
        const result = await pool.query('SELECT * FROM Doctors');
        return result.rows;
    },
};

module.exports = Doctor;
