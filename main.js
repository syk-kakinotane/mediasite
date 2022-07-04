'use strict';
const hamburger = document.getElementById("hamburger");
const navi = document.getElementById("navi");
const mask = document.getElementById("mask");

hamburger.addEventListener("click", function (){
    navi.classList.toggle("active"); 
    mask.classList.toggle("active"); 
    hamburger.classList.toggle("closeBtn");
})

mask.addEventListener("click", function (){
    navi.classList.toggle("active");
    hamburger.classList.toggle("closeBtn");
    mask.classList.toggle("active");
})

navi.addEventListener("click", function (){
  navi.classList.toggle("active"); 
  mask.classList.toggle("active"); 
  hamburger.classList.toggle("closeBtn");
})

$('.pickupSlick').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 120;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
}