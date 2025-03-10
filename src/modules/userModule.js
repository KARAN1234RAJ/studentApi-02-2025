const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    image: { type: String },
    department: { type: String, required: true },
    enrollmentNumber: { type: String, unique: true, required: true },
    courses: [
      {
        courseId: { type: String, required: true },
        courseName: { type: String, required: true },
        grade: { type: String },
      },
    ],
  },
  { timestamps: true }
);
studentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Student", studentSchema);
