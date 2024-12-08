const pool = require('../config/db');

exports.sendNotification = async (userId, message) => {
  try {
    await pool.query(
      "INSERT INTO notifications (user_id, message, created_at) VALUES ($1, $2, NOW())",
      [userId, message]
    );
    console.log(`Notification sent to user ${userId}: ${message}`);
  } catch (err) {
    console.error(`Failed to send notification: ${err.message}`);
  }
};
