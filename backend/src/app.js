const express = require("express");
const sequelize = require("./config/database");
const authRoutes = require("./routes/auth");
const patientRoutes = require("./routes/patient");
const userRoutes = require("./routes/users");
const fileRoutes = require("./routes/files");

require("dotenv").config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/users", userRoutes);
app.use("/api/files", fileRoutes);

sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => console.log("Server running on http://localhost:5000"));
});
