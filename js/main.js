$(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 80
				}, 600);
				return false;
			}
		}
	});
});
$(function () {
	$('#item1').hover(function () {
		$('#item1-hover').fadeIn();
	}, function () {
		$('#item1-hover').fadeOut();
	});
});
$(function () {
	$('#item2').hover(function () {
		$('#item2-hover').fadeIn();
	}, function () {
		$('#item2-hover').fadeOut();
	});
});
$(function () {
	$('#item3').hover(function () {
		$('#item3-hover').fadeIn();
	}, function () {
		$('#item3-hover').fadeOut();
	});
});
$(function () {
	$('#item4').hover(function () {
		$('#item4-hover').fadeIn();
	}, function () {
		$('#item4-hover').fadeOut();
	});
});
$(function () {
	$('#item5').hover(function () {
		$('#item5-hover').fadeIn();
	}, function () {
		$('#item5-hover').fadeOut();
	});
});
$(function () {
	$('#item6').hover(function () {
		$('#item6-hover').fadeIn();
	}, function () {
		$('#item6-hover').fadeOut();
	});
});
$(function () {
	$('#hamburger').click(function () {
		$('#hamburger').toggleClass('is-active');
		$('#header').toggleClass('full-page-header');
		$('#header-flex').toggleClass('flex');
		$('#full-nav').toggleClass('hidden');
	});
});
$(function () {
	$('.full-nav-item').click(function () {
		$('#hamburger').toggleClass('is-active');
		$('#header').toggleClass('full-page-header');
		$('#header-flex').toggleClass('flex');
		$('#full-nav').toggleClass('hidden');
	});
});
$(function () {
	var am = 'analoguemoderne.com';
	$('#contact').attr('action', 'https://formspree.io/info' + String.fromCharCode(64) + am);
	$('#email').attr('href', 'mailto:info' + String.fromCharCode(64) + am);
});