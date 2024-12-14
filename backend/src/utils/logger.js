
const log = (level, message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
};

const info = (message) => log('info', message);
const error = (message) => log('error', message);

module.exports = { info, error };
