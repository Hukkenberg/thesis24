
const { Patient, User } = require('../models');

const findAllPatients = async () => {
  return await Patient.findAll({
    include: [{ model: User, attributes: ['name', 'email'] }],
  });
};

const findPatientById = async (id) => {
  return await Patient.findByPk(id, {
    include: [{ model: User, attributes: ['name', 'email'] }],
  });
};

module.exports = { findAllPatients, findPatientById };
