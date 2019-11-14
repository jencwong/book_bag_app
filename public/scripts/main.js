$(() => {

  // $(“#symptoms”).change(() => {
  //   const endpoint = “https://patientsportal.herokuapp.com/symptoms/all“;



  console.log("hi");
  $.ajax("https://book-bag-app.herokuapp.com/home/classroom").then(data => {
    console.log("Server Sent: ", data);
    data.forEach(student => {
      const $newRow = $("<tr>").appendTo("#reading_report");

      $("<td>")
        .addClass("firstname")
        .text(student.first_name)
        .appendTo($newRow)
        .wrapInner($("<a>").attr("href", `/home/teacher/${student._id}`));
      $("<td>")
        .addClass("lastname")
        .text(student.last_name)
        .appendTo($newRow)
        .wrapInner($("<a>").attr("href", `/home/teacher/${student._id}`));
      $("<td>")
        .addClass("reading_level")
        .text(student.reading_level)
        .appendTo($newRow)
        .wrapInner($("<a>").attr("href", `/home/teacher/${student._id}`));
      $("<td>")
        .addClass("students_book_bag")
        .text(student.book_bag)
        .appendTo($newRow)
        .wrapInner($("<a>").attr("href", `/home/teacher/${student._id}`));

      // $("<button>")
      //   .addClass("showdetails")
      //   .appendTo($newRow);

      // $("<td>")
      // .addClass("book_bag")
      // .text(student.book_bag[i]
      // .appendTo($neRow);
      //         $("<td>")
      // //         .attr("id", "book_bag")
      // //         .text("View book bag")
      // //         .appendTo($neRow);
      // //       // .wrapInner("<a>")
      // //       // .link.attr("href", `/teacher/${student.id}/showBook`)

      //       // h1
      //       // img
      //       // btn
      //       // btn.on('click', => {
      //         // target modal
      //         // target inner modal div
      //         // modal.css('display', 'block')

      //       })
      //     });
    });
  });
});

// $(() => {
//   console.log("hi");
//   $.ajax("http://localhost:3000/home/classroom").then(data => {
//     console.log("Server Sent: ", data);
//     data.forEach(student => {
//       const $newRow = $("<tr>").appendTo("#reading_report");
//       $("<td>")
//         .addClass("firstname")
//         .text(student.first_name)
//         .appendTo($newRow);
//       $("<td>")
//         .addClass("lastname")
//         .text(student.last_name)
//         .appendTo($newRow);
//       $("<td>")
//         .addClass("reading_level")
//         .text(student.reading_level)
//         .appendTo($newRow);
//       $("<td>")
//         .attr("id", "book_bag")
//         .text("View book bag")
//         .appendTo($neRow);
//       // .wrapInner("<a>")
//       // .link.attr("href", `/teacher/${student.id}/showBook`)

//       // $("<a>")
//       //   .attr("id", "bookBagLink")
//       //   .link.attr("href", `/teacher/${student.id}/showBook`);

//       //       // h1
//       //       // img
//       //       // btn
//       //       // btn.on('click', => {
//       //         // target modal
//       //         // target inner modal div
//       //         // modal.css('display', 'block')

//       //       })
//       //     });
//     });
//   });
// });
