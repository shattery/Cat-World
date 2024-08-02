document.addEventListener('DOMContentLoaded', (event) => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 2000,

        // Autoplay
        autoplay: {
            delay: 2500, // Zeit in Millisekunden zwischen den automatischen Wechseln der Slides
            disableOnInteraction: false, // Autoplay wird nicht gestoppt, wenn der Benutzer interagiert
        },

        effect: 'fade',


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});