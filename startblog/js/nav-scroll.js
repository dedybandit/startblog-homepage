$(document).ready(function(){
	$(window).on("scroll",function(){
	  	var wn = $(window).scrollTop();
	    if (wn > 120) {
	    	$(".navbar").css("transition","all 0.3s");
	    	$(".navbar").css("background-color","white");
			$(".navbar").css('box-shadow','0 5px 2px rgba(0,0,0,0.1)');
	    	$(".navbar-logo").css('-webkit-filter','invert(100%)');
        	$(".navbar-nav li a").css('-webkit-filter','invert(100%)');
        	$(".navbar-toggle").css('border','1px solid #000');
        	$(".icon-bar").css('background-color','#000');
	    }
	    else {
	    	$(".navbar").css("background-color","transparent");
	    	$(".navbar").css('box-shadow','none');
	    	$(".navbar-logo").css('-webkit-filter','invert(0%)');
        	$(".navbar-nav li a").css('-webkit-filter','invert(0%)');
        	$(".navbar-toggle").css('border','1px solid #fff');
        	$(".icon-bar").css('background-color','#fff');
	    }
  	});
});