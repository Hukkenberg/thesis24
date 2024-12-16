
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json()); // JSON middleware
app.use("/", routes);    // Use routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));