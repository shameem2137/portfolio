const navbar = document.querySelector('.nav_bar-button');
const overlay = document.querySelector('.overlay');

navbar.addEventListener('click', () => {
  navbar.classList.toggle('open');
  overlay.classList.toggle('open');
});
