$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if(scroll > 60) {
			$(".navbar-dark").css("background" , "#f9f9f9");
		} else {
			$(".navbar-dark").css("background" , "transparent");
		}
	})
})