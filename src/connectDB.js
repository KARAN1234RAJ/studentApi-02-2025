const mongoose = require("mongoose");
console.log("inside BD");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://karanrajibmce:6tvPIlgjmCdsT9le@cluster0.a4qxx.mongodb.net/studentsDB"
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
