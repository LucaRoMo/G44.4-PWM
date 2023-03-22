const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');
const slideWidth = carousel.clientWidth;
let slideIndex = 0;

function slideTo(index) {
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
    }
    slideTo(slideIndex);
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    }
    slideTo(slideIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    }
    slideTo(slideIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);