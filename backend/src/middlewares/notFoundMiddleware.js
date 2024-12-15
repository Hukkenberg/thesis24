
const notFoundMiddleware = (req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found.' });
};

module.exports = notFoundMiddleware;
