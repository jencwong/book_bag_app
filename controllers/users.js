const express = require("express");
const userRouter = express.Router();

// MODEL
const User = require("../models/userModel.js");
const Book = require("../models/bookModel.js");

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

// route for teacher after loggin in
userRouter.get("/teacher", (req, res) => {
  res.render("../views/teacher/mainTeacher.ejs");
  // res.render('')
});

// route for student after loggin in
userRouter.get("/student/:stuID", (req, res) => {
  User.findById(req.params.stuID, (err, foundStudent) => {
    if (err) {
      console.log("Find Student Error", err);
    } else {
      console.log(foundStudent.reading_level);
      const student_rlvl = foundStudent.reading_level;

      Book.find({ reading_level: student_rlvl }, (err, foundBookLevel) => {
        if (err) {
          console.log("Find book error", err);
        } else {
          console.log(foundBookLevel);
          res.render("../views/users/mainStudent.ejs", {
            currentStudent: foundStudent,
            books: foundBookLevel
          });
        }
      });
    }
  });
});

//   User.findOne(
//     { reading_level: req.body.reading_level },
//     (err, foundStudent) => {
//       console.log(
//         `${req.body.reading_level} vs. ${foundStudent.reading_level}`
//       );
//     }
//   );
// });
// query bookModel to find all books
// console.log("student lvl", req.params.stuID);
//   const currentStudent = req.params.stuID;
//   console.log(currentStudent.reading_level);
//   res.render("../views/users/mainStudent.ejs"), {};
// Book.findOne(req.body.reading_level);
//     res.render("../views/users/mainStudent.ejs", {
//       currentStudent: foundStudent
// });

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
        // res.render("../views/users/mainStudent.ejs", {
        //   currentStudent: foundUser
        // });
        // const rLvl = foundUser.reading_level;
        // console.log("redir lvl", rLvl);
        const stuID = foundUser.id;
        res.redirect(`/home/student/${stuID}`);
      }
    } else {
      res.redirect("/home");
    }
  });
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
