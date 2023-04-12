const menuBtn = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const darkMode = document.getElementById('darkmode');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
}

darkMode.addEventListener('click', () => {
   document.body.classList.toggle('active');
})

// Scroll Reveal 
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
    reset: true
})

sr.reveal(" h1, .service p, .about p, .header-section__home p, .courses-item, .paragraph, .count .box, .about span, .service h3, .event-item, .blog-item h3, .blog-item span, .share a, .contact .box h2",{
  interval: 200,
});

// Slide start

var swiper = new Swiper(".page-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".student-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});