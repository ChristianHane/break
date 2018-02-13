$('.sign-in').on('click', function(event) {
  event.stopPropagation();
  $('.sign-in-menu').slideToggle('medium');
  $('.sign-in').toggleClass('sign-in-background');  
})

$('#sign-up').click(() => {
  $('#sign-up').toggleClass('sign-up-selecetor');
})

$('#exit-sign-in').click(() => {
  $('.sign-in-menu').slideToggle('medium');
  setTimeout(() => $('.sign-in').toggleClass('sign-in-background'), 500);
});

$('.about').click(() => {
  $('html, body').animate({
    scrollTop: ($('#steps-container').first().offset().top)
  },500);
})