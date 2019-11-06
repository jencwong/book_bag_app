const express = require("express");
const bookRouter = express.Router();

// MODEL
const Book = require("../models/bookModel.js");

// Routes //////////////////////////////////
// Index Route for all books
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

// new book route
bookRouter.get("/newBook", (req, res) => {
  res.render("../views/teacher/newBook.ejs");
});

// show route
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

// Create Edit Post Route

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
