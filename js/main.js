$(function () {
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 35,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    })
});
