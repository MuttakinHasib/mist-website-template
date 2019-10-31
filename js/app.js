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
    $(".dpt-slider").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: false,
        margin:10,
        autoplayTimeout:1500,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            1280: {
                items: 4
            },
            600: {
                items: 3
            },
            320: {
                items: 1
            }
        }
    });
});