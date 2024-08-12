

let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const sliderWidth = document.querySelector('.slider').clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

window.addEventListener('resize', () => {
    showSlide(currentSlide);
});

// Start the slider on page load
showSlide(currentSlide);
startAutoSlide();
