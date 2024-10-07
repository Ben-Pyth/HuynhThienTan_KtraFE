let currentIndex = 0;

// Lấy các slide
const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider-container');
const totalSlides = slides.length;

// Nút điều hướng
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
}
