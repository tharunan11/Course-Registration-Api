const express = require("express");
const app = express();
const morgan = require("morgan");
const bparse = require("body-parser");

const availablecourses = require("./source/routes/allcourses");
const registeredcourses = require("./source/routes/registeredcourses");
const userRoutes = require("./source/routes/user");

//external middlewares
app.use(morgan("dev"));
app.use(bparse.urlencoded({ extended: false }));
app.use(bparse.json());

//handle corse error
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", " PUT,POST,PATCH,DELETE,GET");
//     return res.status(200).json({});
//   }
// });

//node promise

//routes for all courses and registered courses
app.use("/regcourses", registeredcourses);
app.use("/allcourses", availablecourses);
app.use("/users", userRoutes);

//Error handling
app.use((req, res, next) => {
  const error = new Error("Undefined");
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
