# book_bag_app

Currently, my daughter who is in 2nd grade is assigned a reading level and a selection of books for the reading level. Suggested reading list is not available for student or parent to view. Additionally, there is no tracking system to record books that were completed. As a result, my daughter often brings home books she has read.

The app is for schools to centralize the database of recommended reading list and for readers to use the database to pick books from the reading list, check the book availability, borrow, return books and track their reading list. The database will be categorized according to each student's reading level as well as the book's category: whether fiction or non-fiction.

## App functions and features

On the student's side (client's side):
Each student log in to view the reading list assigned based on the reading level.
If the book is available, the student can put the book title in his book bag (this is the borrow button).
If the book is not available, the not available button will appear.
When the student returns the book, the book title will show up in the completed book list.
Student will have two views:

1. The main view consists of reading list and completed list.
2. The book bag view with the book title and a return button.

Teachers log into the app with admin privilege. Teacher has access to

1. View, add, edit, delete items in the book library
2. View, add, edit, delete users for the app.

Teacher have two separate index views:

1. Book Library
2. Classroom with all the students' name, reading level, and titles in the book bag.

### 7 RESTful Routes

Teacher's account
For the book model:
1 Index: all the books with a get method
2 Show: specific book with a get method
3 New: teacher add new book to the library (with a get method)
4 Create: create a new book to the library (post method)
5 Edit: teacher sends edits of any of the book (get method)
6 Update: send the updates with a put/post method
7 Destroy: delete a specifid book with a delete method

Teacher's account
For the user model:
1 Index: display all users with account type of student with a get method and jQuery (make an AJAX request on my own API)
2 Show: specific student with a get method
3 New: teacher add new user to the classroom (get method)
4 Create: create a new user to the classroom (post method)
5 Edit: teacher sends edits of any of the student's account (get method)
6 Update: send the updates with a put/post method
7 Destroy: delete a specifid user with a delete method

Student's account:
(Both User and Books model)

1. Show: display a specific user's name, reading level with get method. Biven his/her reading level will pull all books on the corresponding reading level
2. Edit: user edits his/her book bag by pushing book title (from book model) into the user's book bag (user model) with a put/post method.
3. Edit: user edits his/her book bag and completed lists by returning titles in his book/bag and pushing the title into the completed list.

### Models

The book database schema will be structured as follows:
title: { type: String, required: true },
author: { type: String, required: true },
category: { type: String, required: true },
genre: [String],
quantity: { type: Number, required: true },
reading_level: { type: String, required: true },
tags: [String],
image: { type: String }

The app users schema is below:
first_name: { type: String, required: true },
last_name: { type: String, required: true },
username: { type: String, required: true },
email: { type: String, required: true },
password: { type: String, required: true },
account_type: { type: String, required: true },
book_bag: [String],
reading_level: String,
completed: [String]

### Resources

1. Mongodb
2. Express js
3. all the npm packages, including method-override
4. Bulma

### Deployment

Heroku app at [the book bag app](https://book-bag-app.herokuapp.com/home)

## Versioning

Use gitHub for versioning. For the versions available, see the [the project repository](https://github.com/jencwong/book_bag_app).

## Authors

- **Jen C Wong** -

## Acknowledgments

- Thanks to project instructor Kenny for guiding with scope, milestones, and APIs.
- Thans to Joem for helping along with debuggin.
- Hat tip to anyone whose code was used, including GA SEI instructors' notes, w3 schools, jQuery, Stack Overflow, MongoDB, Bulma
- Inspiration is from my daughter's school.
