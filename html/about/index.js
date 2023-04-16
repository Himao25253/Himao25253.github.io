var hamburger = document.querySelector('.hamburger-menu');
var nav = document.querySelector('nav');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  if (nav) {
    nav.classList.toggle('active');
  }
});