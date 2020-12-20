// Pausing the start of the carousel
$(".carousel").carousel({
  ride: true,
});

// Loading screen
$(window).on("load", function () {
  $("#onload").fadeOut("slow");

  // Activating the carousel
  $(".carousel").carousel({
    interval: 500,
    ride: false,
  });
});

var flag = 0;

$("#menu-btn").click(function () {
  if (flag == 0) {
    $("#menu").addClass("get-in");
    flag = 1;
  } else {
    $("#menu").removeClass("get-in");
    flag = 0;
  }
});
