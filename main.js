const menuIcon = document.getElementById('menu-icon-logo');
const slideOutMenu = document.getElementById('slideout-menu');
const searchIcon = document.getElementById('search-icon');
const searchIconSmall = document.getElementById('search-icon-small');
const searchBox = document.getElementById('search-box');
const homePageForm = document.getElementById('home-booking form');

searchIcon.addEventListener('click', function () {
    if (searchBox.style.top == '100px'){
        searchBox.style.top = '-50px';
        searchBox.style.pointerEvents = 'none';
    } else{
        searchBox.style.top = '100px'
        searchBox.style.pointerEvents = 'auto'
    }
});

searchIconSmall.addEventListener('click', function () {
    if (searchBox.style.top == '110px'){
        searchBox.style.top = '-50px';
        searchBox.style.pointerEvents = 'none';
    } else{
        searchBox.style.top = '110px'
        searchBox.style.pointerEvents = 'auto'
    }
});
searchIconSmall.addEventListener('click', function () {
    if (searchBox.style.top == '60px'){
        searchBox.style.top = '-60px';
        searchBox.style.pointerEvents = 'none';
    } else{
        searchBox.style.top = '60px'
        searchBox.style.pointerEvents = 'auto'
    }
});

menuIcon.addEventListener('click', function () {
    if (slideOutMenu.style.opacity == '1'){
        slideOutMenu.style.opacity = '0';
        slideOutMenu.style.pointerEvents = 'none';
    } else {
        slideOutMenu.style.opacity = '1';
        slideOutMenu.style.pointerEvents = 'auto';
    }
})

// IMAGE SLIDER
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

// Manual Navigation
var manualNav = function(manual){

    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide= i;
    });
});

// Autoplay Navigation
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i) {
            i = 0;
        }
        if(i >= slides.length){
            return;
        }
        repeater();
        }, 7000);
    }
    repeater();
}
repeat();

// CAROUSEL!!
const carouselImages = document.querySelector('.images-carousel');
const carouselButtons = document.querySelectorAll('.carousel-btn');
const numberOfImages = document.querySelectorAll('.images-carousel .image-container').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        if(event.target.id === 'previous') {
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += 265;
            }
        } else{
            if (imageIndex !== numberOfImages) {
                imageIndex++;
                translateX -= 265
            }
        }

        carouselImages.style.transform = `translateX(${translateX}px)`
    });
});

// CAROUSEL 2
const csImages = document.querySelector('.cs-image-wrap');
const carouselButton = document.querySelectorAll('.carousel-btns');
let numberOfImage = document.querySelectorAll('.cs-image-slider .image-container').length;
    let imageIndexs = 1;
    let translateXs = 0;

carouselButton.forEach(button => {

    button.addEventListener('click', event => {
        if(event.target.id === 'prev') {
            if (imageIndexs !== 1) {
                imageIndexs--;
                translateXs += 265;
            }
        } else{
            if (imageIndexs !== numberOfImage) {
                imageIndexs++;
                translateXs -= 265
            }
        }
        csImages.style.transform = `translateX(${translateXs}px)`;
    });
});

