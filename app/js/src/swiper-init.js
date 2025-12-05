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