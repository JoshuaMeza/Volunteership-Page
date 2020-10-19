// Load
window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}

// Carousel Hero
$('.carousel').carousel({
    interval: 4000
})

// Changes
if ( screen.width < 1025 ){
    document.getElementById('hero1').src = './img/heroOneMobile.png';
    document.getElementById('hero2').src = './img/heroTwoMobile.png';
    document.getElementById('hero3').src = './img/heroThreeMobile.png';
    document.getElementById('hero4').src = './img/heroFourMobile.png';
}else{
    document.getElementById('change').innerHTML = 'En la sección de "Mascotas" podrás conocer un poco acerca de los Bulldog Ingleses, Yorkshire Terriers y Shih Tzus.';
}

//Carousel slick
$('.productSlick').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
})
