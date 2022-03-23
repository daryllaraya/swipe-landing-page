// CHANGE THE BG COLOR OF THE HEADER WHEN SCROLL

const header = document.querySelector('.navbar');

window.onscroll = function() {
  var top = window.scrollY;

  if (top >= 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}