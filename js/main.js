//$(document).ready(function () {

	// sticky navigation menu

	//let nav_offset_top = $('.header_area').height() + 50;

	//function navbarFixed() {
	//		if ($('.header_area').length) {
	//				$(window).scroll(function () {
	//						let scroll = $(window).scrollTop();
	//						if (scroll >= nav_offset_top) {
	//								$('.header_area .main-menu').addClass('navbar_fixed');
	//						} else {
	//								$('.header_area .main-menu').removeClass('navbar_fixed');
	//						}
	//				})
	//		}
	//}

	//navbarFixed();

//});

// Scroll para seções
(function() {
	let navBtn = $('.nav-item');
	
	let homeSection = $('#home');
	let sobreSection = $('#sobre');
	let servicosSection = $('#servicos');
	let portfolioSection = $('#portfolio');
	let contatoSection = $('#contato');
	
	let scrollTo = '';
	
	$(navBtn).click(function() {
	
			let btnId = $(this).attr('id');
	
			console.log(btnId);
	
			if (btnId == 'home-menu') {
					scrollTo = homeSection;
			} else if (btnId == 'sobre-menu') {
					scrollTo = sobreSection;
			} else if (btnId == 'servicos-menu') {
					scrollTo = servicosSection;
			} else if (btnId == 'portfolio-menu') {
					scrollTo = portfolioSection;
			} else {
					scrollTo = contatoSection;
			}
	
			$([document.documentElement, document.body]).animate({
					scrollTop: $(scrollTo).offset().top - 70
			}, 1500);
	
	});
	
	}());
	
	// Animar ao Scroll
	
	// Debounce do Lodash
	debounce = function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};
	
	
	(function(){
		var $target = $('.anime-left'),
				animationClass = 'anime-start',
				offset = $(window).height() * 3/4;
	
		function animeScroll() {
			var documentTop = $(document).scrollTop();
	
			$target.each(function(){
				var itemTop = $(this).offset().top;
				if (documentTop > itemTop - offset) {
					$(this).addClass(animationClass);
				} else {
					$(this).removeClass(animationClass);
				}
			});
		}
	
		animeScroll();
	
		$(document).scroll(debounce(function(){
			animeScroll();
		}, 10));
	})();
	
	
	
	