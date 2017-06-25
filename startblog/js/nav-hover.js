$(document).ready(function(){
	if ($(document).scrollTop() >= 1) {
		$(".navbar-default").hover(function(){
			$(this).css('transition','0.2s');
			$(this).css('background-color', '#fff');
			$(this).css('box-shadow','0 5px 3px rgba(0,0,0,0.1)');
	        $(".navbar-logo").css('-webkit-filter','invert(100%)');
	        $(".navbar-nav li a").css('-webkit-filter','invert(100%)');
	        $(".navbar-toggle").css('border','2px solid #000');
	        $(".icon-bar").css('background-color','#000');
		});
		$(".navbar-default").mouseleave(function(){
			$(this).css('transition','0.2s');
			$(this).css('background-color', 'transparent');
			$(this).css('box-shadow','none');
	        $(".navbar-logo").css('-webkit-filter','invert(0%)');
	        $(".navbar-nav li a").css('-webkit-filter','invert(0%)');
	        $(".navbar-toggle").css('border','2px solid #fff');
	        $(".icon-bar").css('background-color','#fff');
		});
	} else {
		$(".navbar-default").css('box-shadow','0 5px 3px rgba(0,0,0,0.1)');
	    $(".navbar-logo").css('-webkit-filter','invert(100%)');
	    $(".navbar-nav li a").css('-webkit-filter','invert(100%)');
	    $(".navbar-toggle").css('border','2px solid #000');
	    $(".icon-bar").css('background-color','#000');
	}
});