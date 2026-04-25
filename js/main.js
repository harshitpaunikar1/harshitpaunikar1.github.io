;(function () {
	'use strict';

	var fullHeight = function() {
		var setHeight = function() {
			$('.js-fullheight').css('height', $(window).height());
		};

		setHeight();
		$(window).on('resize', setHeight);
	};

	var burgerMenu = function() {
		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();

			if ($('body').hasClass('menu-show')) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function() {
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 250);
			}
		});

		$('#colorlib-main-nav a[href^="#"]').on('click', function() {
			$('body').removeClass('menu-show');
			$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
		});
	};

	var contentWayPoint = function() {
		if (!$.fn.waypoint || !$('.animate-box').length) return;

		var i = 0;
		$('.animate-box').waypoint(function(direction) {
			if (direction === 'down' && !$(this.element).hasClass('animated')) {
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function() {
					$('body .animate-box.item-animate').each(function(k) {
						var el = $(this);
						setTimeout(function() {
							var effect = el.data('animate-effect');
							el.addClass((effect === 'fadeIn' ? 'fadeIn' : 'fadeInUp') + ' animated');
							el.removeClass('item-animate');
						}, k * 200);
					});
				}, 100);
			}
		}, { offset: '85%' });
	};

	var counterWayPoint = function() {
		if (!$.fn.waypoint || !$.fn.countTo || !$('#colorlib-counter').length) return;

		$('#colorlib-counter').waypoint(function(direction) {
			if (direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout(function() {
					$('.js-counter').countTo({
						formatter: function(value, options) {
							return value.toFixed(options.decimals);
						}
					});
				}, 400);
				$(this.element).addClass('animated');
			}
		}, { offset: '90%' });
	};

	var owlCarouselFeatureSlide = function() {
		if (!$.fn.owlCarousel) return;

		if ($('.owl-carousel1').length) {
			$('.owl-carousel1').owlCarousel({
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				autoplay: true,
				loop: true,
				margin: 0,
				nav: true,
				dots: false,
				autoHeight: true,
				responsive: {
					0: { items: 1 },
					600: { items: 2 },
					1000: { items: 3 }
				},
				navText: [
					"<i class='icon-arrow-left3 owl-direction'></i>",
					"<i class='icon-arrow-right3 owl-direction'></i>"
				]
			});
		}

		if ($('.owl-carousel, .owl-carousel3').length) {
			$('.owl-carousel, .owl-carousel3').owlCarousel({
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				autoplay: true,
				loop: true,
				margin: 0,
				nav: false,
				dots: true,
				autoHeight: true,
				items: 1,
				navText: [
					"<i class='icon-arrow-left3 owl-direction'></i>",
					"<i class='icon-arrow-right3 owl-direction'></i>"
				]
			});
		}
	};

	$(function() {
		fullHeight();
		burgerMenu();
		counterWayPoint();
		contentWayPoint();
		owlCarouselFeatureSlide();
	});
}());
