const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
  logging: false, // Ẩn câu lệnh SQL trong console (tuỳ chọn)
});

sequelize
  .authenticate()
  .then(() => console.log("Kết nối cơ sở dữ liệu thành công"))
  .catch((err) => console.error("Lỗi kết nối cơ sở dữ liệu:", err));

module.exports = sequelize;
