const bcrypt = require('bcryptjs');

module.exports = async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
};
