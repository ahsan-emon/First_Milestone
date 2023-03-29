// owl carousel 
$('.card_owl').owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 1,
        },
        // breakpoint from 480 up
        480: {
            items: 2,
        },
        // breakpoint from 768 up
        768: {
            items: 3,
        },
        1200: {
            items: 5,
        }
    }
});
$('.img_slider').owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
    }
});
$('.quote_slider1').owlCarousel({
    // center: true,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
    }
});
$('.quote_slider2').owlCarousel({
    // center: true,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
    }
});
$('.quote_slider3').owlCarousel({
    // center: true,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
    }
});
$('.quote_slider4').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        }
    }
});
$('.quote_slider5').owlCarousel({
    loop: true,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        991: {
            items: 2,
        }
    }
});
$(document).ready(function () {
    var owl = $('.quote_slider6');
    owl.owlCarousel({
        center: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });
    $("[data-trigger]").on("click", function () {
        owl.trigger("to.owl.carousel", index);
    });
    owl.on('changed.owl.carousel', function (event) {
        var current = event.item.index;
        var src = $(event.target).find(".item").eq(current).attr("data-number");
        $("div").removeClass("active");
        $("[data-trigger]div").eq(src).addClass("active");
    })
});


$(document).ready(function () {
    var owl = $('.first_header_slider');
    owl.owlCarousel({
        center: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });
    $("[data-trigger]").on("click", function () {
        owl.trigger("to.owl.carousel", index);
    });
    owl.on('changed.owl.carousel', function (event) {
        var current = event.item.index;
        var src = $(event.target).find(".item").eq(current).attr("data-number");
        $("div").removeClass("active");
        $("[data-trigger]div").eq(src).addClass("active");
    })
});