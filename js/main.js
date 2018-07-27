$(document).ready(function () {
    $('#main-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 1
    });
    $('#staf-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    //    AOS JS
    AOS.init({
        offset: 200,
       
        easing: 'ease-in-sine',
       
    });
});
