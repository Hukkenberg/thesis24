const Patient = require('../models/Patient');
const User = require('../models/User');

class AdminService {
  static async getAllPatients() {
    return await Patient.findAll();
  }

  static async updateUserRole(userId, role) {
    return await User.update({ role }, { where: { id: userId }, returning: true });
  }
}

module.exports = AdminService;
