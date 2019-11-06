const mongoose = require("mongoose");
const BookModel = require("./bookModel.js");

const seedBooks = [
  {
    title: "Pippi Longstocking",
    author: "Astrid Lindgren",
    category: "Fiction",
    genre: ["Adventure", "Classics", "Comedy and Humor"],
    quantity: 5,
    reading_level: "O",
    tags: [
      "swedish",
      "individuality",
      "friendship",
      "creativity",
      "imagination",
      "curiosity",
      "cleverness"
    ],
    image: "/images/PippiLongstockingCover.png"
  },
  {
    title: "I am Martin Luther King, Jr.",
    author: "Brad Meltzer",
    category: "Nonfiction",
    genre: ["Biography", "Autobiograpy"],
    quantity: 2,
    reading_level: "O",
    tags: [
      "history",
      "historical figure",
      "civil rights",
      "leader",
      "black history",
      "equality",
      "justice"
    ],
    image: "/images/MartinLutherCover.png"
  },
  {
    title: "National Geographic Kids Readers: Jump Pup!",
    author: "Susan B. Neuman",
    category: "Nonfiction",
    genre: ["informational"],
    quantity: 1,
    reading_level: "G",
    tags: ["animal", "dog", "puppy", "pet"],
    image: "/images/JumpPupCover.png"
  }
];

// Seeding function
const seedDB = () => {
  // Declare db name, URI, and instantiate connection
  const dbName = "startlibrary";
  const dbURI = `mongodb://localhost:27017/${dbName}`;
  const dbConnection = mongoose.connection;

  dbConnection.on("error", err => console.log("DB Connection Error: ", err));
  dbConnection.on("connected", () => console.log("DB Connected to: ", dbURI));
  dbConnection.on("disconnected", () => console.log("DB Disconnected"));

  mongoose.connect(dbURI, { useNewUrlParser: true }, () =>
    console.log(`${dbName} db running on ${dbURI}`)
  );
  BookModel.collection.drop();

  BookModel.create(seedBooks, (err, newBooks) => {
    if (err) {
      console.log("Seeding error: ", err);
    } else {
      console.log("Seeding OK: ", newBooks);
    }
    dbConnection.close();
  });
};

// seedDB();

module.exports = seedBooks;
