// CHANGE THE BG COLOR OF THE HEADER WHEN SCROLL

const navbar = document.querySelector('.navbar');

window.onscroll = () => {
  var top = window.scrollY;

  if (top >= 50) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
};
