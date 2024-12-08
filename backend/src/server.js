const app = require('./app');
const { PORT } = require('./config/environment');
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
