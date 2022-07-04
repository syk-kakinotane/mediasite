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