# book_bag_app

The app is for schools to centralize the database of recommended reading list and for readers to use the database to pick books from the reading list, check the book availability, borrow, return books and track their reading list. The database will be categorized according to each student's reading level as well as the book's category: whether fiction or non-fiction.

## App functions and feactures

The book database schema will be structured as follows:
title: String
author: String
category: String
genre: String
quantity: num
reading_level: String
tags: [String]
Image: String

On the student's side (client's side):
Each student log in to view the reading list that his/her teacher has assigned (complete list)
Students can search books by category/subcategory/tags.
If the book is available, the student can check out the book (need a borrow button).
If the book is not available, the student can be on the waitlist? (need a waitlist button).
Borrowing period is one week. No renewal allowed.  
If the book is not returned on time, students will be fined? (how to do this), or just send a reminder?
Students can see his/her completed book list.

Maybe for future:
Grade level

Teachers log into the database and has the ability to customize the reading list to his/her class (adding, removing), however it will not affect the master list.  
Teachers can view each student's completed books and make comments. (Do I need a separate dabatase for the class?).
Teacher will require that each student complete XX books per category per term?

On the student's side (client's side):
Each student log in to view the reading list that his/her teacher has assigned (complete list)
Students can search books by category/subcategory/tags.
If the book is available, the student can check out the book (need a borrow button).
If the book is not available, the student can be on the waitlist? (need a waitlist button).
Borrowing period is one week. No renewal allowed.  
If the book is not returned on time, students will be fined? (how to do this), or just send a reminder?
Students can see his/her completed book list.

### 7 RESTful Routes

### Models

### Mobile Responsiveness

### User Interface

### Resources

1. Dog gif is embedded from (GIPHY)[https://giphy.com/]

2. The 3D dice and the dice face images are from (free-icons).[https://www.flaticon.com/free-icons/dice]

3. The image of the trophy is from (free-icons).[https://www.flaticon.com/free-icons/dice]

4. The graphic of the snake, dice and ladder is from (pngfly)[https://www.pngfly.com/png-00kll8/]

### Deployment

Add additional notes about how to deploy this on a live system

## Versioning

Use gitHub for versioning. For the versions available, see the [the project repository](https://github.com/jencwong/snake-ladder).

## Authors

- **Jen C Wong** -

## Acknowledgments

- Thanks to project instructor Leo for guiding with scope, milestones, and APIs.
- Thans to Brian and Joem for helping along with CSS, jQuery and game logic.
- Hat tip to anyone whose code was used, including GA SEI instructors' notes, w3 schools, jQuery, Stack Overflow.
- Inspiration is from the Snake and Ladder Game Board.
