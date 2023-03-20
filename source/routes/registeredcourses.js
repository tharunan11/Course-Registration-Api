const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Auth = require("../middleware/auth");

const RegCourse = require("../models/regcoursesmodel");
const allcourse = require("../models/allcoursesmodel");

router.get("/", (req, res, next) => {
  RegCourse.find()
    .select("courseID _id")
    .populate("courseID")
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
  allcourse
    .findById(req.body.courseID)
    .then((coursee) => {
      const reg = new RegCourse({
        _id: new mongoose.Types.ObjectId(),
        courseID: req.body.courseID,
      });
      reg
        .save()
        .then((result) => {
          console.log(result);
          res
            .status(201)
            .json({ message: "Creating course", createdcourse: reg });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Course not found",
        error: err,
      });
    });
});

router.get("/:courseID", (req, res, next) => {
  const id = req.params.courseID;
  RegCourse.findById(id)
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

module.exports = router;
