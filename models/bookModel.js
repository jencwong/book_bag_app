const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    genre: [String],
    quantity: { type: Number, required: true },
    reading_level: { type: String, required: true },
    tags: [String],
    image: { type: String }
  },
  { timeStamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

// module.exports = { bookSchema: bookSchema, Book: Book };
