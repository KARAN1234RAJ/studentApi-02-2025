require("dotenv").config();
// Import the app module
const app = require("./app");
const PORT = process.env.PORT || 3000;

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
