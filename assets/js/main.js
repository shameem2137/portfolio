const navbar = document.querySelector('.navbar');
const navbarbtn = document.querySelector('.navbar-toggler');
const icon = document.querySelector('.navbar-toggler > span');

navbarbtn.addEventListener('click', () => {
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
});

$('.services-carousel').owlCarousel({
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

var typed = new Typed('#typed', {
  strings: ['Shameem Ansari', 'Web Developer', 'Web Designer', 'Freelancer'],
  typeSpeed: 100,
  backSpeed: 50,
  startDelay: 500,
  backDelay: 1500,
  loop: true,
});
