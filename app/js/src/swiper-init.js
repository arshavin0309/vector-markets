let mainPlatformButtons = new Swiper(".main-platform__buttons", {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

let mainPlatformSwiper = new Swiper(".main-platform__swiper", {
    spaceBetween: 20,

    thumbs: {
        swiper: mainPlatformButtons,
    },
});

let mainAnalyticsButtons = new Swiper(".main-analytics__buttons", {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

let mainAnalyticsSwiper = new Swiper(".main-analytics__swiper", {
    spaceBetween: 100,

    thumbs: {
        swiper: mainAnalyticsButtons,
    },
});

let mainAboutSwiper = new Swiper(".main-about__swiper", {
    slidesPerView: 5,
});













let mainHeroSwiper = new Swiper('.main-hero__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    loop: false,
    speed: 2000,
    watchSlidesProgress: true
});

let scrollDirection = 1; // 1 = вперёд, -1 = назад
let scrollSpeed = 0.3;   // пикселей за кадр
let isScrolling = false; // флаг автоскролла

function autoScroll() {
    if (!isScrolling) return;

    let newTranslate = mainHeroSwiper.translate - scrollSpeed * scrollDirection;
    const maxTranslate = 0;
    const minTranslate = mainHeroSwiper.maxTranslate();

    if (newTranslate < minTranslate) scrollDirection = -1;
    else if (newTranslate > maxTranslate) scrollDirection = 1;

    mainHeroSwiper.setTranslate(newTranslate);
    requestAnimationFrame(autoScroll);
}

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            isScrolling = true;
            requestAnimationFrame(autoScroll);
        } else {
            isScrolling = false;
        }
    });
}, { threshold: 0.1 }); // запускается, когда хотя бы 10% слайдера видны

observer.observe(document.querySelector('.main-hero__swiper'));
