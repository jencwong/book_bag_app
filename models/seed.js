// Require mongoose, and db models
// const mongoose = require("mongoose");
// const BookModel = require("./bookModel.js");
// const UserModel = require("./userModel.js");

// // array of objects for seed data
// const seedBooks = [
//   {
//     title: "Pippi Longstocking",
//     author: "Astrid Lindgren",
//     category: "Fiction",
//     genre: ["Adventure", "Classics", "Comedy and Humor"],
//     quantity: 5,
//     reading_level: "O",
//     tags: [
//       "swedish",
//       "individuality",
//       "friendship",
//       "creativity",
//       "imagination",
//       "curiosity",
//       "cleverness"
//     ],
//     image: "/images/PippiLongstockingCover.png"
//   },
//   {
//     title: "I am Martin Luther King, Jr.",
//     author: "Brad Meltzer",
//     category: "Nonfiction",
//     genre: ["Biography", "Autobiograpy"],
//     quantity: 2,
//     reading_level: "O",
//     tags: [
//       "history",
//       "historical figure",
//       "civil rights",
//       "leader",
//       "black history",
//       "equality",
//       "justice"
//     ],
//     image: "/images/MartinLutherCover.png"
//   },
//   {
//     title: "National Geographic Kids Readers: Jump Pup!",
//     author: "Susan B. Neuman",
//     category: "Nonfiction",
//     genre: ["informational"],
//     quantity: 1,
//     reading_level: "G",
//     tags: ["animal", "dog", "puppy", "pet"],
//     image: "/images/JumpPupCover.png"
//   }
// ];

// const seedClass = [
//   {
//     first_name: "Ella",
//     last_name: "Bayonne",
//     username: "e_bayonne",
//     email: "ebayonne@wiltonps.org",
//     password: "md2030-1",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "M"
//   },
//   {
//     first_name: "Mila",
//     last_name: "Balicki",
//     username: "m_balicki",
//     email: "mbalicki@wiltonps.org",
//     password: "md2030-2",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "N"
//   },
//   {
//     first_name: "Braeden",
//     last_name: "Clarke",
//     username: "b_clarke",
//     email: "bclarke@wiltonps.org",
//     password: "md2030-3",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "M"
//   },
//   {
//     first_name: "Dezmond",
//     last_name: "Delepine",
//     username: "d_delepine",
//     email: "ddelepine@wiltonps.org",
//     password: "md2030-4",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "M"
//   },
//   {
//     first_name: "Erica",
//     last_name: "Lupinski",
//     username: "e_lupinski",
//     email: "elupinski@wiltonps.org",
//     password: "md2030-5",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "N"
//   },
//   {
//     first_name: "Jack",
//     last_name: "MacDonald",
//     username: "j_macDonald",
//     email: "jmacdonald@wiltonps.org",
//     password: "md2030-6",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "O"
//   },
//   {
//     first_name: "Kevin",
//     last_name: "Mahoney",
//     username: "k_mahoney",
//     email: "kmahoney@wiltonps.org",
//     password: "md2030-7",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "M"
//   },
//   {
//     first_name: "Brady",
//     last_name: "Manberg",
//     username: "b_manberg",
//     email: "bmanberg@wiltonps.org",
//     password: "md2030-8",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "N"
//   },
//   {
//     first_name: "Ethan",
//     last_name: "Peck",
//     username: "e_peck",
//     email: "epeckg@wiltonps.org",
//     password: "md2030-9",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "O"
//   },
//   {
//     first_name: "Noah",
//     last_name: "Rudnicki",
//     username: "n_rudnicki",
//     email: "nrudnickig@wiltonps.org",
//     password: "md2030-10",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "M"
//   },
//   {
//     first_name: "Zoey",
//     last_name: "Ward",
//     username: "z_ward",
//     email: "zward@wiltonps.org",
//     password: "md2030-11",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "N"
//   },
//   {
//     first_name: "Clara",
//     last_name: "Wright",
//     username: "c_wright",
//     email: "cwright@wiltonps.org",
//     password: "md2030-12",
//     account_type: "student",
//     book_bag: [],
//     reading_level: "M"
//   },
//   {
//     first_name: "Maureen",
//     last_name: "Burdick",
//     username: "m_burdick",
//     email: "mburdick@wiltonps.org",
//     password: "mdadmin-1",
//     account_type: "teacher",
//     book_bag: [],
//     reading_level: ""
//   },
//   {
//     first_name: "Kim",
//     last_name: "Hastings",
//     username: "k_hastings",
//     email: "khastings@wiltonps.org",
//     password: "mdadmin-2",
//     account_type: "teacher",
//     book_bag: [],
//     reading_level: ""
//   }
// ];

// // Seeding function
// const seedDB = () => {
//   // Declare db name, URI, and instantiate connection
//   const dbName = "bookbagdb";
//   const dbURI = `mongodb://localhost:27017/${dbName}`;
//   const dbConnection = mongoose.connection;

//   // Error handling for mongoose connection
//   dbConnection.on("error", err => console.log("DB Connection Error: ", err));
//   dbConnection.on("connected", () => console.log("DB Connected to: ", dbURI));
//   dbConnection.on("disconnected", () => console.log("DB Disconnected"));

//   mongoose.connect(dbURI, { useNewUrlParser: true }, () =>
//     console.log(`${dbName} db running on ${dbURI}`)
//   );

//   // Drop all collections first to avoid duplicate data
//   BookModel.collection.drop();
//   UserModel.collection.drop();

//   // Call db models to create seed data
//   BookModel.create(seedBooks, (err, newBooks) => {
//     if (err) {
//       console.log("Seeding error: ", err);
//     } else {
//       console.log("Seeding OK: ", newBooks);
//     }
//   });

//   UserModel.create(seedClass, (err, newClass) => {
//     if (err) {
//       console.log("Seeding error: ", err);
//     } else {
//       console.log("Seeding OK: ", newClass);
//     }
//   });

//   // updating user to add to book bag
//   UserModel.find({}, (err, allUsers) => {
//     allUsers.forEach(student => {
//       BookModel.find(
//         { reading_level: student.reading_level },
//         (err, foundBooks) => {
//           UserModel.findByIdAndUpdate(
//             student.id,
//             { book_bag: "foundBooks" },
//             { new: true },
//             (error, updatedUser) => {
//               console.log("added books to user");
//               console.log(updatedUser);
//             }
//           );
//         }
//       );
//     });
//   });
// };

// seedDB();

// module.exports = {
//   seedBooks,
//   seedClass
// };

// Require mongoose, and db models
const mongoose = require("mongoose");
const BookModel = require("./bookModel.js");
const UserModel = require("./userModel.js");

// array of objects for seed data
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

const seedClass = [
  {
    first_name: "Ella",
    last_name: "Bayonne",
    username: "e_bayonne",
    email: "ebayonne@wiltonps.org",
    password: "md2030-1",
    account_type: "student",
    book_bag: [],
    reading_level: "M"
  },
  {
    first_name: "Mila",
    last_name: "Balicki",
    username: "m_balicki",
    email: "mbalicki@wiltonps.org",
    password: "md2030-2",
    account_type: "student",
    book_bag: [],
    reading_level: "N"
  },
  {
    first_name: "Braeden",
    last_name: "Clarke",
    username: "b_clarke",
    email: "bclarke@wiltonps.org",
    password: "md2030-3",
    account_type: "student",
    book_bag: [],
    reading_level: "M"
  },
  {
    first_name: "Dezmond",
    last_name: "Delepine",
    username: "d_delepine",
    email: "ddelepine@wiltonps.org",
    password: "md2030-4",
    account_type: "student",
    book_bag: [],
    reading_level: "M"
  },
  {
    first_name: "Erica",
    last_name: "Lupinski",
    username: "e_lupinski",
    email: "elupinski@wiltonps.org",
    password: "md2030-5",
    account_type: "student",
    book_bag: [],
    reading_level: "N"
  },
  {
    first_name: "Jack",
    last_name: "MacDonald",
    username: "j_macDonald",
    email: "jmacdonald@wiltonps.org",
    password: "md2030-6",
    account_type: "student",
    book_bag: [],
    reading_level: "O"
  },
  {
    first_name: "Kevin",
    last_name: "Mahoney",
    username: "k_mahoney",
    email: "kmahoney@wiltonps.org",
    password: "md2030-7",
    account_type: "student",
    book_bag: [],
    reading_level: "M"
  },
  {
    first_name: "Brady",
    last_name: "Manberg",
    username: "b_manberg",
    email: "bmanberg@wiltonps.org",
    password: "md2030-8",
    account_type: "student",
    book_bag: [],
    reading_level: "N"
  },
  {
    first_name: "Ethan",
    last_name: "Peck",
    username: "e_peck",
    email: "epeckg@wiltonps.org",
    password: "md2030-9",
    account_type: "student",
    book_bag: [],
    reading_level: "O"
  },
  {
    first_name: "Noah",
    last_name: "Rudnicki",
    username: "n_rudnicki",
    email: "nrudnickig@wiltonps.org",
    password: "md2030-10",
    account_type: "student",
    book_bag: [],
    reading_level: "M"
  },
  {
    first_name: "Zoey",
    last_name: "Ward",
    username: "z_ward",
    email: "zward@wiltonps.org",
    password: "md2030-11",
    account_type: "student",
    book_bag: [],
    reading_level: "N"
  },
  {
    first_name: "Clara",
    last_name: "Wright",
    username: "c_wright",
    email: "cwright@wiltonps.org",
    password: "md2030-12",
    account_type: "student",
    book_bag: [],
    reading_level: "M"
  },
  {
    first_name: "Maureen",
    last_name: "Burdick",
    username: "m_burdick",
    email: "mburdick@wiltonps.org",
    password: "mdadmin-1",
    account_type: "teacher",
    book_bag: [],
    reading_level: ""
  },
  {
    first_name: "Kim",
    last_name: "Hastings",
    username: "k_hastings",
    email: "khastings@wiltonps.org",
    password: "mdadmin-2",
    account_type: "teacher",
    book_bag: [],
    reading_level: ""
  }
];

// Seeding function
const seedDB = () => {
  // Declare db name, URI, and instantiate connection
  const dbName = "bookbagdb";
  const dbURI = `mongodb://localhost:27017/${dbName}`;
  const dbConnection = mongoose.connection;

  // Error handling for mongoose connection
  dbConnection.on("error", err => console.log("DB Connection Error: ", err));
  dbConnection.on("connected", () => console.log("DB Connected to: ", dbURI));
  dbConnection.on("disconnected", () => console.log("DB Disconnected"));

  mongoose.connect(dbURI, { useNewUrlParser: true }, () =>
    console.log(`${dbName} db running on ${dbURI}`)
  );

  // Drop all collections first to avoid duplicate data
  BookModel.collection.drop();
  UserModel.collection.drop();

  // Call db models to create seed data
  BookModel.create(seedBooks, (err, newBooks) => {
    if (err) {
      console.log("Seeding error: ", err);
    } else {
      console.log("Seeding OK: ", newBooks);
    }
  });

  UserModel.create(seedClass, (err, newClass) => {
    if (err) {
      console.log("Seeding error: ", err);
    } else {
      console.log("Seeding OK: ", newClass);

      // seedDB();

      // after creating the users, we will call the function that updates the USERS to include the proper books from our BOOKS collections, into the USERS book bag.
      // updateUsersBookBag();
    }
  });
};

// the function for updating user to add books that correspond to the user's reading level to the book bag
// const updateUsersBookBag = () => {
//   UserModel.find({}, (err, allUsers) => {
//     allUsers.forEach(student => {
//       BookModel.find(
//         { reading_level: student.reading_level },
//         (err, foundBooks) => {
//           foundBooks.forEach(book => {
//             UserModel.findByIdAndUpdate(
//               student.id,
//               { $push: { book_bag: book } },
//               { new: true },
//               (error, updatedUser) => {
//                 console.log("added books to user");
//                 console.log(updatedUser);
//               }
//             );
//           });
//         }
//       );
//     });
//   });
// };

const addBookToStudent = async () => {
  try {
    const dbName = "bookbagdb";
    const dbURI = `mongodb://localhost:27017/${dbName}`;
    const dbConnection = mongoose.connection;

    // Error handling for mongoose connection
    dbConnection.on("error", err => console.log("DB Connection Error: ", err));
    dbConnection.on("connected", () => console.log("DB Connected to: ", dbURI));
    dbConnection.on("disconnected", () => console.log("DB Disconnected"));

    mongoose.connect(dbURI, { useNewUrlParser: true }, () =>
      console.log(`${dbName} db running on ${dbURI}`)
    );

    await UserModel.find({ reading_level: "O" }, (err, foundOStudents) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(foundOStudents);
        BookModel.find({ reading_level: "O" }, (err, foundOBooks) => {
          if (err) {
            console.log(err);
          } else {
            console.log(foundOBooks);

            foundOBooks.forEach(book => {
              console.log("each", book);

              foundOStudents.forEach(stu => {
                UserModel.update(
                  stu,
                  { $push: { book_bag: book } },
                  (err, updated) => {
                    if (err) console.log(err);
                    console.log(updated);
                  }
                );
              });
            });
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

// addBookToStudent();

module.exports = {
  seedBooks,
  seedClass
};
