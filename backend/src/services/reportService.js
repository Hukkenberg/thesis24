const pool = require('../config/db');

exports.generateReport = async (userId, reportDetails) => {
  try {
    await pool.query(
      "INSERT INTO reports (user_id, details, created_at) VALUES ($1, $2, NOW())",
      [userId, reportDetails]
    );
    return `Report generated successfully for user ${userId}`;
  } catch (err) {
    console.error(`Failed to generate report: ${err.message}`);
    throw new Error("Error generating report");
  }
};
