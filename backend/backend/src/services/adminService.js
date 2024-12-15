
const User = require('../models/User');

const getAllAdmins = async () => {
    return await User.findAll({ where: { role: 'admin' } });
};

module.exports = {
    getAllAdmins,
};
