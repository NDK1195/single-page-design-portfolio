const slides = document.querySelectorAll(".slide");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let slideIndex = 0;

function updateSlideOrder() {
  slides.forEach((slide, index) => {
    slide.style.order = (index - slideIndex + slides.length) % slides.length;
  });
}

function previousSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  console.log(slideIndex);

  updateSlideOrder();
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  console.log(slideIndex);
  updateSlideOrder();
}

previous.addEventListener("click", previousSlide);
next.addEventListener("click", nextSlide);

updateSlideOrder();
