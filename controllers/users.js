const express = require("express");
const userRouter = express.Router();

// MODEL
const User = require("../models/userModel.js");

// ROUTES //////////////////////////////////////////
// Index Get Route
userRouter.get("/", (req, res) => {
  res.render("../views/users/home.ejs");
});

// User log in route
userRouter.get("/log-in", (req, res) => {
  res.render("../views/users/login.ejs");
});

userRouter.get("/classroom", (req, res) => {
  User.find({ account_type: "student" }, (error, foundData) => {
    res.send(foundData);
  });
});

// user authentication route
userRouter.post("/main", (req, res) => {
  console.log("login");
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    console.log(`${req.body.password} vs. ${foundUser.password}`);
    if (req.body.password === foundUser.password) {
      console.log("Password is correct!");
      if (foundUser.account_type === "teacher") {
        console.log("Teacher!");
        res.redirect("/home/teacher");
      } else {
        console.log("Student!");
        // res.redirect("/home/student");
        res.render("../views/users/mainStudent.ejs", {
          currentStudent: foundUser
        });
      }
    } else {
      res.redirect("/home");
    }
  });
});

userRouter.get("/teacher", (req, res) => {
  res.render("../views/teacher/mainTeacher.ejs");
  // res.render('')
});

userRouter.get("/student", (req, res) => {
  res.render("../views/users/mainStudent.ejs");
});

//   // res.send("connected")
//   User.find({ account_type: "student" }, (error, allStudents) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(allStudents);
//     }
//   });
// });

// Export
module.exports = userRouter;
