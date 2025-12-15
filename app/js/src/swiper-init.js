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
let scrollSpeed = 50;   // пикселей в секунду
let isScrolling = false;
let lastTime = null;

function autoScroll(time) {
    if (!isScrolling) return;

    if (lastTime === null) lastTime = time;
    const delta = time - lastTime; // миллисекунды с последнего кадра
    lastTime = time;

    // Переводим скорость в пиксели за кадр
    const movement = (scrollSpeed * delta) / 1000; // пиксели, учитывая delta времени
    let newTranslate = mainHeroSwiper.translate - movement * scrollDirection;

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
            if (!isScrolling) {
                isScrolling = true;
                lastTime = null;
                requestAnimationFrame(autoScroll);
            }
        } else {
            isScrolling = false;
        }
    });
}, { threshold: 0.1 });

observer.observe(document.querySelector('.main-hero__swiper'));

