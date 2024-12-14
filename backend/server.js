
const app = require('./app');
const { connectDB } = require('./src/config/db');
const { PORT } = require('./src/config/dotenv');

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
