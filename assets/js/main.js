const navbar = document.querySelector('.navbar');
const navbarbtn = document.querySelector('.navbar-toggler');
const icon = document.querySelector('.navbar-toggler > span');

navbarbtn.addEventListener('click', () => {
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
});

window.addEventListener('scroll', (e) => {
  if (this.scrollY > 90) {
    navbar.classList.add('stick');
  } else {
    navbar.classList.remove('stick');
  }
});
