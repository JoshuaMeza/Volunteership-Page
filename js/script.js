// Load
window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}

// Carrousel
$('.carousel').carousel({
    interval: 4000
})