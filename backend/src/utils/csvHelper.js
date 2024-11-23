const { parse } = require('json2csv');

exports.convertToCSV = (data) => {
    try {
        return parse(data);
    } catch (error) {
        throw new Error('Failed to convert to CSV');
    }
};
