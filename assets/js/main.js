const navbar = document.querySelector('.navbar');
const navbarbtn = document.querySelector('.navbar-toggler');
const navbarcollapse = document.querySelector('.navbar-collapse');
const icon = document.querySelector('.navbar-toggler > span');
const darkmode = document.querySelector('#darkmodewrap');
const navigate = document.querySelector('.navigate');
const body = document.body;

window.addEventListener('load', (e) => {
  if (localStorage.getItem('darkmode')) {
    body.classList.add('dark');
    darkmode.setAttribute('checked', true);
  } else {
    body.classList.remove('dark');
    darkmode.removeAttribute('checked');
  }
});

window.addEventListener('click', (e) => {
  let target = e.target;
  var _mobileMenuOpen = navbarcollapse.classList.contains('show');
  if (_mobileMenuOpen === true && !target.classList.contains('navbar-toggler')) {
    navbarbtn.click();
  }
});

window.addEventListener('scroll', () => {
  if (this.scrollY > 200) {
    navigate.classList.add('visible');
  } else {
    navigate.classList.remove('visible');
  }
});

navigate.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

darkmode.addEventListener('click', (e) => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('darkmode', 'true');
  } else {
    localStorage.removeItem('darkmode');
  }
});

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
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
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
