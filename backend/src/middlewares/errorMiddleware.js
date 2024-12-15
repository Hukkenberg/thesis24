
const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Log lỗi ra console
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        error: {
            message,
            stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
        },
    });
};

module.exports = errorMiddleware;
