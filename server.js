require("dotenv").config();
// dependencies
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
console.log(process.env.PORT);
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// Database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bookbagdb";

// connect Mongoose
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// controllers
const booksController = require("./controllers/books.js");
const usersController = require("./controllers/users.js");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/books", booksController);
app.use("/home", usersController);

// check root connection
app.get("/", (req, res) => {
  res.send("connect!");
});

// listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
