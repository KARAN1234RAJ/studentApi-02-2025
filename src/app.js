const express = require("express");
// Import routes
const usersRoute = require("./routes/userRoutes");
const app = express();
require("./connectDB");
// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use user routes
app.use("/user", usersRoute);

module.exports = app;
