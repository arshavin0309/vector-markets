let mainHeroSwiper = new Swiper('.main-hero__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
});

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