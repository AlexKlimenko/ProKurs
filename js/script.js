$(function(){
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$(".sale_box .wrapper .tab").click(function() {
		$(".sale_box .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 		$(".sale_box .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	

	$(".owl_carousel").owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: ['<img src="img/left.png" alt="">','<img src="img/right.png" alt="">'],
	});


	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

});


