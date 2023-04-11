
/***** Custom_style Js *****/

/***** Mobile Menu *****/

$(document).ready(function(){
	$(".res-menu a").click(function(){
		$(".site-menu").addClass("open-mobile-menu");
	});
	$(".close-res-menu").click(function(){
		$(".site-menu").removeClass("open-mobile-menu");
	});
});

/***** Banner Title animate *****/

/***** Blog sidebar *****/

$(document).ready(function () {

    //slider Jquery

    $(".lazy").slick({
        lazyLoad: 'ondemand',
        // infinite: true,
        autoplay: false,
        slidesToShow: 1,
        arrows: false,
        // autoplaySpeed: 3000,
        dots: true,
    });

    $(".reviews-slider").slick({
        // lazyLoad: 'ondemand',
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        // autoplaySpeed: 3000,
        dots: true,
    });
});

$('.video').parent().click(function () {
    if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play(); $(this).children(".playpause").fadeOut();
        $(this).children(".video").get(0).play(); $(this).children(".video-title").fadeOut();
    } else {
        $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
        $(this).children(".video-title").fadeIn();
    }
});

    // $('.video').parent().click(function () {
    //     if ($(this).children(".video").get(0).paused) {
    //         $(this).children(".video").get(0).play(); $(this).children(".video-title").fadeOut();
    //     } else {
    //         $(this).children(".video").get(0).pause();
    //         $(this).children(".video-title").fadeIn();
    //     }
    // });


// $(function() {
//   $(".slick-prev").addClass("fa fa-angle-double-left");
//   $(".slick-next").addClass("fa fa-angle-double-right");
// });

// Wrap every letter in a span
// var textWrapper = document.querySelector('.animated-title');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
//   .add({
//     targets: '.animated-title .letter',
//     translateY: [-100,0],
//     easing: "easeOutExpo",
//     duration: 1400,
//     delay: (el, i) => 30 * i
//   }).add({
//     targets: '.animated-title',
//     opacity: 1,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000,
//   });
