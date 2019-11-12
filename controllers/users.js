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
  User.find({ account_type: "student" }, (error, foundData) => {
    res.render("../views/teacher/mainTeacher.ejs", {
      student: foundData
    });
    // res.render('')
  });
});

// route for teacher to setup a new student:
userRouter.get("/teacher/newuser", (req, res) => {
  res.render("../views/teacher/newUser.ejs");
});

// edit student get route
userRouter.get("/teacher/:id/edituser", (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      res.render("../views/teacher/edituser.ejs", {
        currentUser: foundUser
      });
    }
  });
});

// route for teacher to view specific student (show student route):
userRouter.get("/teacher/:stuID", (req, res) => {
  User.findById(req.params.stuID, req.body, (err, foundStudent) => {
    res.render("../views/teacher/showStudent.ejs", {
      currentStudent: foundStudent
    });
  });
});

// // route for teacher to view student's book bag
// userRouter.get("/teacher/:stuID/showBook", (req, res) => {
//   User.findById(req.params.stuID, (err, foundStudent) => {
//     if (err) {
//       console.log("Find Student Error", err);
//     } else {
//       res.render("../views/teacher/showBookBag.ejs", {
//         currentStudent: foundStudent
//       });
//     }
//   });
// });

// route for student after loggin in
userRouter.get("/student/:stuID", (req, res) => {
  User.findById(req.params.stuID, req.body, (err, foundStudent) => {
    if (err) {
      console.log("Find Student Error", err);
    } else {
      console.log(foundStudent.reading_level);
      const student_rlvl = foundStudent.reading_level;

      Book.find({ reading_level: student_rlvl }, (err, foundBookLevel) => {
        if (err) {
          // console.log("Find book error", err);
        } else {
          // console.log(foundBookLevel);
          res.render("../views/users/mainStudent.ejs", {
            currentStudent: foundStudent,
            books: foundBookLevel
          });
        }
      });
    }
  });
});

// route for student to view book bag
userRouter.get("/student/:stuID/bookbag", (req, res) => {
  Book.find({}, (err, foundBooks) => {
    User.findById(req.params.stuID, (err, foundStudent) => {
      res.render("../views/users/bookBag.ejs", {
        books: foundBooks,
        currentStudent: foundStudent
      });
    });
  });
});

// route for students to return book
userRouter.get("/student/:stuID/books/:bookID/return", (req, res) => {
  res.send("Test");
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

// POST Routes

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

// New User Post Route
userRouter.post("/teacher", (req, res) => {
  User.create(req.body, (error, createdUser) => {
    if (error) {
      res.send(error);
    } else {
      res.redirect("/home/teacher");
    }
  });
});

// PUT Routes ///////////

// set up book bag put route
userRouter.put("/student/:stuID/books/:bookID/borrow", (req, res) => {
  let bookQty = req.body.quantity;
  req.body.quantity -= 1;
  bookQty = req.body.quantity;
  Book.findByIdAndUpdate(
    req.params.bookID,
    req.body,
    { new: true },
    (err, updatedQty) => {
      if (err) {
        console.log(err);
      } else {
        let bookTitle = req.body.title;
        Book.findByIdAndUpdate(
          req.params.bookID,
          req.body,
          { new: true },
          (err, foundBook) => {
            if (err) {
              console.log(err);
            } else {
              User.findByIdAndUpdate(
                req.params.stuID,
                // req.body,
                { $push: { book_bag: foundBook.title } },
                { new: true },
                (err, foundStudent) => {
                  if (err) {
                    console.log(err);
                  } else {
                    // foundBook.forEach(book => {
                    // foundStudent.book_bag.push(foundBook.title);
                    console.log(foundStudent);
                    console.log(foundStudent.book_bag);
                    console.log(foundBook);
                    res.render("../views/users/bookBag.ejs", {
                      currentStudent: foundStudent,
                      books: foundBook
                      // const stuID = foundStudent.id;
                      // res.redirect(`/home/student/${stuID}`);
                    });
                    // });
                  }
                }
              );
            }
          }
        );
      }
    }
  );
});

// set up return book (edit) put route
userRouter.put("/student/:stuID/books/:bookID/return", (req, res) => {
  let bookQty = req.body.quantity;
  req.body.quantity += 1;
  bookQty = req.body.quantity;
  Book.findByIdAndUpdate(
    req.params.bookID,
    req.body,
    { new: true },
    (err, updatedQty) => {
      if (err) {
        console.log(err);
      } else {
        let bookTitle = req.body.title;
        Book.findByIdAndUpdate(
          req.params.bookID,
          req.body,
          { new: true },
          (err, foundBook) => {
            if (err) {
              console.log(err);
            } else {
              User.findByIdAndUpdate(
                req.params.stuID,
                // req.body,
                {
                  $pull: { book_bag: foundBook.title },
                  $push: { completed: foundBook.title }
                },
                { new: true },
                (err, foundStudent) => {
                  if (err) {
                    console.log(err);
                  } else {
                    // foundBook.forEach(book => {
                    // foundStudent.book_bag.push(foundBook.title);
                    console.log(foundStudent);
                    console.log(foundStudent.completed);
                    console.log(foundBook);
                    const stuID = foundStudent.id;
                    res.redirect(`/home/student/${stuID}`);
                    // , {
                    //   currentStudent: foundStudent,
                    //   books: foundBook

                    // res.redirect(`/home/student/${stuID}`);
                  }
                  // });
                }
              );
            }
          }
        );
      }
    }
  );
});

// Edit Student Put Route
userRouter.put("/teacher/:stuID", (req, res) => {
  User.findByIdAndUpdate(
    req.params.stuID,
    req.body,
    { new: true },
    (error, updatedStudent) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/home/teacher/");
      }
    }
  );
});

// // // set up book bag put route
// userRouter.put("/student/:stuID/books/:bookID/borrow", (req, res) => {
//   let bookQty = req.body.quantity;
//   req.body.quantity -= 1;
//   bookQty = req.body.quantity;
//   Book.findByIdAndUpdate(
//     req.params.bookID,
//     req.body,
//     { new: true },
//     (err, updatedQty) => {
//       if (err) {
//         console.log(err);
//       } else {
//         let bookTitle = req.body.title;
//         Book.findByIdAndUpdate(
//           req.params.bookID,
//           req.body,
//           { new: true },
//           (err, foundBook) => {
//             if (err) {
//               console.log(err);
//             } else {
//               User.findByIdAndUpdate(
//                 req.params.stuID,
//                 req.body,
//                 // { $push: { book_bag: foundBook.title } },
//                 { new: true },
//                 (err, foundStudent) => {
//                   if (err) {
//                     console.log(err);
//                   } else {
//                     const updateBag = foundStudent => {
//                       // foundStudent.book_bag.push(foundBook.title);
//                       User.update(
//                         foundStudent,
//                         { $push: { book_bag: foundBook } },
//                         (err, updated) => {
//                           if (err) {
//                             console.log(err);
//                           } else {
//                             console.log(foundStudent);
//                             console.log(foundStudent.book_bag);
//                             console.log(foundBook);
//                             // res.redirect(`/home/student/${stuID}`);
//                             res.render("../views/users/bookBag.ejs", {
//                               currentStudent: foundStudent,
//                               books: foundBook
//                               // const stuID = foundStudent.id;
//                               // res.redirect(`/home/student/${stuID}`);
//                               // // });
//                             });
//                           }
//                         }
//                       );
//                       // });
//                     };
//                     updateBag();
//                   }
//                 }
//               );
//             }
//           }
//         );
//       }
//     }
//   );
// });

// borrowBook function:
// const borrowBook = () => {
//   Book.findByIdAndUpdate(
//     req.params.bookID,
//     req.body,
//     { new: true },
//     (err, foundBook) => {
//       // foundBook.forEach(book => {
//       User.findByIdAndUpdate(
//         req.params.stuID,
//         req.body,
//         { $push: { book_bag: foundBook.title } },
//         { new: true },
//         (error, foundBookBag) => {
//           console.log("added books to user");
//           console.log(foundBookBag);
//           res.render("../views/users/bookBag.ejs", {
//             currentStudent: foundStudent,
//             books: foundBookBag
//           });
//         }
//       );
//     }
//   );
// };
// // );
// borrowBook();
// }
// }
// // }
// );
// });

// res.send(updatedQty);

// // set up book bag put route
// userRouter.put("/student/:studID/books/:bookID/borrow", (req, res) => {
//   User.findOneAndUpdate(
//     req.params.stuID,
//     req.body,
//     { new: true },
//     (err, foundStudent) => {
//       if (err) {
//         console.log(err);
//       } else {
//         Book.findOneAndUpdate(
//           req.params.bookID,
//           req.body,
//           { new: true },
//           (err, updatedQty) => {
//             let bookQty = req.body.quantity;
//             req.body.quantity -= 1;
//             bookQty = req.body.quantity;
//             if (err) {
//               console.log(err);
//             } else {
//               res.render("../views/users/mainStudent.ejs", {
//                 currentStudent: foundStudent,
//                 book: updatedQty
//               });
//             }
//           }
//         );
//       }
//     }
//   );
// });

//   Book.findOneAndUpdate(req.params.bookID, (err, foundBook) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(foundBook);
//       User.findByIdAndUpdate(req.params.stuID, (err, foundStudent) => {
//         if (err) {
//           console.log(err);
//         } else {
//           let bookQty = req.body.quantity;
//           bookQty -= 1;

//           bookQty = req.body.quantity;
//           Book.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true },
//             (err, updatedQty) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 res.render("../views/users/mainStudent.ejs", {
//                   currentStudent: foundStudent,
//                   book: updatedQty
//                 });
//               }
//             }
//           );
//         }
//       });
//     }
//   });
// });
//   // res.send("connected")
//   User.find({ account_type: "student" }, (error, allStudents) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(allStudents);
//     }
//   });
// });

// Delete Route
userRouter.delete("/teacher/:stuID", (req, res) => {
  User.findByIdAndRemove(req.params.stuID, (error, deletedStudent) => {
    if (error) {
      res.send(error);
    } else {
      res.redirect("/home/teacher");
    }
  });
});

// Export
module.exports = userRouter;
