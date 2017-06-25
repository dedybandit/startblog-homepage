$(document).ready(function(){
	var nav = $("button.navbar-on");
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 120) {
			nav.removeClass.("navbar-on").addClass("navbar-toggle");
		} else {
			nav.removeClass.("navbar-toggle").addClass("navbar-on");
		}
	});
	
});