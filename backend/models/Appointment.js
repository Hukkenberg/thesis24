
const pool = require('../utils/db');

const Appointment = {
    getAll: async () => {
        const result = await pool.query('SELECT * FROM Appointments');
        return result.rows;
    },
};

module.exports = Appointment;
