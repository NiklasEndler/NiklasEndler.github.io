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
		$('nav').removeClass('navbar-light');
		$('nav').addClass('navbar-dark');
	}
	else {
		$('nav').removeClass('shrink');
		$('nav').removeClass('navbar-dark');
		$('nav').addClass('navbar-light');
	}
});



