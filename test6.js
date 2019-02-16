// if ($(window).width()<976) {
// 	$('nav').removeClass('fixed-top') && $('nav').addClass('sticky-top');
// 	}
// else {
// 	$('nav').removeClass('sticky-top') && $('nav').addClass('fixed-top');
// }


// $(window).resize(function() {
// var width = $(window).width();
// if(width<976) {
// 	$('nav').removeClass('fixed-top') && $('nav').addClass('sticky-top');
// 	}
// else {
// 	$('nav').removeClass('sticky-top') && $('nav').addClass('fixed-top');
// }
// })

$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
		$('nav').addClass('shrink');
	}
	else {
		$('nav').removeClass('shrink');
	}
});



