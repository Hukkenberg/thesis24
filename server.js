const app = require('./app');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }).then(() => {
  console.log('Kết nối cơ sở dữ liệu thành công.');
  app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
  });
});