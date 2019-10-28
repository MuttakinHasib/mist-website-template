$(document).ready(function() {
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            1280: {
                items: 1
            },
            600: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });
});
