const mongoose = require("mongoose");

const regCoursesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  courseID: {
    type: String,
    unique: true,
    ref: "allcourses",
    required: true,
  },
});

module.exports = mongoose.model("RegCourse", regCoursesSchema);
