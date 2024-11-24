const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const authRoutes = require("./routes/auth");
const patientRoutes = require("./routes/patient");
const doctorRoutes = require("./routes/doctor");
const userRoutes = require("./routes/users");
const fileRoutes = require("./routes/files");
const labRoutes = require("./routes/lab");
const adminRoutes = require("./routes/admin");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://thesis24-web.onrender.com",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/users", userRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/lab", labRoutes);
app.use("/api/admin", adminRoutes);

sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
