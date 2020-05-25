$(document).ready(function () {
    // init slider
    let reviewSlider = new Swiper('.review__slider', {
        loop: true,
        pagination: {
            el: '.review__pagination',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            850: {
                slidesPerView: 'auto',
            }
        }
    })
    //end script
});
