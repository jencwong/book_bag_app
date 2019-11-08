$(() => {
  console.log("hi");
  $.ajax("http://localhost:3000/home/classroom").then(data => {
    console.log("Server Sent: ", data);
    data.forEach(student => {
      const $newRow = $("<tr>").appendTo("#reading_report");

      $("<td>")
        .addClass("firstname")
        .text(student.first_name)
        .appendTo($newRow);
      $("<td>")
        .addClass("lastname")
        .text(student.last_name)
        .appendTo($newRow);
      $("<td>")
        .addClass("reading_level")
        .text(student.reading_level)
        .appendTo($newRow);
      $("<button>")
        .addClass("showdetails")
        .appendTo($newRow);

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
