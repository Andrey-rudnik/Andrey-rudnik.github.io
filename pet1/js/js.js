var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("sliderDotsItem");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// slider #2

var slideIndexx = 1;
showSlidesSecond(slideIndexx);

function plusSlide() {
    showSlidesSecond(slideIndexx += 1);
}

function minusSlide() {
    showSlidesSecond(slideIndexx -= 1);
}

function currentSlideSecond(n) {
    showSlidesSecond(slideIndexx = n);
}

function showSlidesSecond(n) {
    var i;
    var slides = document.getElementsByClassName("playerSay");
    var dots = document.getElementsByClassName("sliderDotsNext");
    if (n > slides.length) {
        slideIndexx = 1
    }
    if (n < 1) {
        slideIndexx = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexx - 1].style.display = "flex";
    dots[slideIndexx - 1].className += " active";
}