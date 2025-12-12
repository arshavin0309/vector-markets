document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("section").forEach(section => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true
            }
        });

        // 1️⃣ Секция
        tl.from(section, {
            opacity: 0,
            x: 40,
            duration: 0.4,
            ease: "power2.out"
        });

        // 2️⃣ Заголовки внутри секции
        tl.from(section.querySelectorAll("h1, h2, h3, h4, h5, h6"), {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1
        });

        // 3️⃣ Параграфы и списки
        tl.from(section.querySelectorAll("p, ul, ol"), {
            x: -30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.05
        });
    });

    document.body.classList.remove('preload');

    gsap.to(".main-bg__image", {
        rotate: 360,               // полный оборот
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: true,          // плавная связка с прокруткой
        }
    });

})