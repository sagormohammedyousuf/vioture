$(document).ready(function () {

    // home page 
    $(".car-slider").owlCarousel({
        items: 1, // One item at a time
        loop: true,
        nav: true,
        dots: false,
        navText: [
            "<i class='bi bi-arrow-left-short'></i>",
            "<i class='bi bi-arrow-right-short'></i>"
        ], // Custom navigation arrows
        autoplay: true,
        autoplayTimeout: 5000, // 5 seconds
        smartSpeed: 800, // Transition speed
        responsive: {
            0: { items: 1 },
            768: { items: 1 },
            991: { items: 1 }
        }
    });

    $(".car-slider").trigger('refresh.owl.carousel');


    $(".popular-car-listing-slider").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: false,
        navText: [
            "<i class='bi bi-arrow-left-short'></i>",
            "<i class='bi bi-arrow-right-short'></i>"
        ],
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            991: { items: 4 }
        },
        onTranslated: function () {
            // Refresh the carousel after each translation to reset nav state
            $(".popular-car-listing-slider").trigger('refresh.owl.carousel');
        }
    });

    $(".owl-prev").attr("aria-label", "Previous Slide");
    $(".owl-next").attr("aria-label", "Next Slide");



    // details-page

    // single car details slider //
    $('.single-car-carousel').owlCarousel({
        margin: 10,
        nav: true,
        dots: true,
        items: 1,
        navText: [
            "<i class='bi bi-arrow-left-short'></i>",
            "<i class='bi bi-arrow-right-short'></i>"
        ],
        onInitialized: setDotBackgrounds // Call function once initialized
    });

    // set slider img in dots
    function setDotBackgrounds(event) {
        var $dots = $(".owl-dots .owl-dot"); // Select all dots
        $(".single-car-carousel .item img").each(function (index) {
            var imgSrc = $(this).attr("src"); // Get the image source
            $dots.eq(index).css({
                "background-image": `url(${imgSrc})`,
                "background-size": "cover",
                "background-position": "center"
            });
        });
    }
    

    // about us page 
    $(".about-testi-slider").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000, // 5 seconds
        smartSpeed: 800, // Transition speed
        responsive: {
            0: { items: 1 },
            768: { items: 1 },
            991: { items: 2 },
            1200: { items: 2 }
        }
    });


    // why choose slider  - details page//
    $('.why-choose-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 4,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 3 }
        }
    });


});
