/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable quotes */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let slidePosition = 0;
const slides = document.querySelectorAll("div.carousel-item");
const totalSlides = slides.length;

console.log(totalSlides);

document
  .querySelector("#carousel-button--previous")
  .addEventListener('click', moveToPrevSlide);

document
  .querySelector("#carousel-button--next")
  .addEventListener('click', moveToNextSlide);

function updateSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item--visible");
    slide.classList.add("carousel-item--hidden");
  }

  slides[slidePosition].classList.add("carousel-item--visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlides();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlides();
}
