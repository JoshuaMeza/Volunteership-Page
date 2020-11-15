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
