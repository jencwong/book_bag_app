// const mongoose = require("mongoose");
// const { bookSchema } = require("./bookModel.js");

// const userSchema = new mongoose.Schema(
//   {
//     first_name: { type: String, required: true },
//     last_name: { type: String, required: true },
//     username: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     account_type: { type: String, required: true },
//     book_bag: String,
//     reading_level: String
//   },
//   { timeStamps: true }
// );

// const User = mongoose.model("User", userSchema);

// module.exports = User;

const mongoose = require("mongoose");
// const { bookSchema } = require("./bookModel.js");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    account_type: { type: String, required: true },
    // book_bag: [bookSchema],
    book_bag: [String],
    reading_level: String
  },
  { timeStamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
