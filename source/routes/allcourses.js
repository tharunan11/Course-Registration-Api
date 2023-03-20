const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const allcourses = require("../models/allcoursesmodel");
const Auth = require("../middleware/auth");

// role = (req, res, next) => {
//   try {
//     const a = req.body.role * 1;
//     console.log(req.body.role);
//     console.log(a);
//     if (req.body.role == a) next();
//   } catch (error) {
//     return res.status(401).json({
//       message: "Auth failled",
//     });
//   }
// };

router.get("/", (req, res, next) => {
  allcourses
    .find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", Auth, (req, res, next) => {
  const courses = new allcourses({
    _id: new mongoose.Types.ObjectId(),
    courseID: req.body.courseID,
    coursename: req.body.coursename,
    instructor: req.body.instructor,
  });
  courses
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Creating course",
        createdcourse: courses,
      });
    })
    .catch((err) => console.log(err));
});

router.get("/:courseID", (req, res, next) => {
  const id = req.params.courseID;
  allcourses
    .findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:courseID", Auth, (req, res, next) => {
  const id = req.params.courseID;
  allcourses
    .findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/:courseID", Auth, (req, res, next) => {
  const id = req.params.courseID;
  allcourses
    .findByIdAndDelete({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
