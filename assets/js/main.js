const navbar = document.querySelector('.nav_bar-button');
const overlay = document.querySelector('.overlay');
const body = document.getElementsByTagName('body')[0];

navbar.addEventListener('click', (e) => {
  e.stopPropagation();
  navbar.classList.toggle('open');
  overlay.classList.toggle('open');
});

overlay.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.body.addEventListener('click', (e) => {
  navbar.classList.remove('open');
  overlay.classList.remove('open');
});
