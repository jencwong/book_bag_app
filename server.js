require("dotenv").config();
// dependencies
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
console.log(process.env.PORT);
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// connect Mongoose
mongoose.connect("mongodb://localhost:27017/basiccrud", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// controllers
const booksController = require("./controllers/books.js");
const seedBooks = require("./models/seed.js");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use("/books", booksController);

// check root connection
app.get("/", (req, res) => {
  res.send("connect!");
});

// listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
