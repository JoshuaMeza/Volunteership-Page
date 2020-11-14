// Pausing the start of the carousel
$('.carousel').carousel({
  ride: true,
})

// Loading screen
$(document).ready(() => {
  $('#onload').fadeOut();

  // Activating the carousel
  $('.carousel').carousel({
    interval: 500,
    ride: false,
  })
})
