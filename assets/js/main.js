const navbar = document.querySelector('.navbar');
const navbarbtn = document.querySelector('.navbar-toggler');
const icon = document.querySelector('.navbar-toggler > span');

navbarbtn.addEventListener('click', () => {
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
});
