
/***** Custom_style Js *****/

/***** Mobile Menu *****/

// $(document).ready(function(){
// 	$(".menu-click").click(function(){
// 		$(".open-mobile-menu").slideToggle("slow");
// 	});
// });

/***** Banner Title animate *****/

/***** Blog sidebar *****/

$(document).ready(function(){

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
