const mongoose = require("mongoose");

const allCoursesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  courseID: { type: Number, required: true },
  coursename: { type: String, required: true },
  instructor: { type: String, required: true },
});

module.exports = mongoose.model("allcourses", allCoursesSchema);
