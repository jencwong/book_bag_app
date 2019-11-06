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

// Index Routes

// Export
module.exports = bookRouter;
