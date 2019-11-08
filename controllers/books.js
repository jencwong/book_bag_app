const express = require("express");
const bookRouter = express.Router();

// MODEL
const Book = require("../models/bookModel.js");

// Routes //////////////////////////////////
// Index Get Route for all books
bookRouter.get("/", (req, res) => {
  Book.find({}, (error, allBooks) => {
    if (error) {
      res.send(error);
    } else {
      // res.send(allBooks);
      res.render("../views/teacher/index.ejs", {
        books: allBooks
      });
    }
  });
  // res.send("router is running");
});

// new get book route
bookRouter.get("/newBook", (req, res) => {
  res.render("../views/teacher/newBook.ejs");
});

// edit get route
bookRouter.get("/:id/editBook", (req, res) => {
  // res.send("edit");
  Book.findById(req.params.id, (err, foundBook) => {
    if (err) {
      console.log(err);
    } else {
      res.render("../views/teacher/editBook.ejs", {
        book: foundBook
      });
    }
  });
});

// show get route
bookRouter.get("/:id", (req, res) => {
  Book.findById(req.params.id, (err, foundBook) => {
    res.render("../views/teacher/showBook.ejs", {
      book: foundBook
    });
  });
});

// Create New Post Route
bookRouter.post("/", (req, res) => {
  Book.create(req.body, (error, createdBook) => {
    if (error) {
      res.send(error);
    } else {
      // res.send(createdBook);
      res.redirect("/books");
    }
  });
});

// Create Edit Put Route
bookRouter.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedBook) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/books/");
      }
    }
  );
});

// Delete Route
bookRouter.delete("/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id, (error, deletedBook) => {
    if (error) {
      res.send(error);
    } else {
      res.redirect("/books");
    }
  });
});

// Export
module.exports = bookRouter;
