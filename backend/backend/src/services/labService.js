
const LabResult = require('../models/LabResult');

const getLabResults = async () => {
    return await LabResult.findAll();
};

module.exports = {
    getLabResults,
};
