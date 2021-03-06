$(document).ready(function(){
	var pagebody = $("#pagebody");
	var themenu  = $("#navmenu");
	var topbar   = $("#toolbarnav");
	var content  = $("#content");
	var viewport = {
    	width  : $(window).width(),
    	height : $(window).height()
	};
	// retrieve variables as 
	// viewport.width / viewport.height
	
	function openme() { 
		$(function () {
		    topbar.animate({
		       left: "255px"
		    }, { duration: 260, queue: false });
		    pagebody.animate({
		       left: "255px"
		    }, { duration: 260, queue: false });
		});
	}
	
	function closeme() {
		var closeme = $(function() {
	    	topbar.animate({
	            left: "0px"
	    	}, { duration: 180, queue: false });
	    	pagebody.animate({
	            left: "0px"
	    	}, { duration: 180, queue: false });
		});
	}

	// checking whether to open or close nav menu
	$("#menu-btn").live("click", function(e){
		e.preventDefault();
		var leftval = pagebody.css('left');
		
		if(leftval == "0px") {
			openme();
		}
		else { 
			closeme(); 
		}
	});
	
	// loading page content for navigation
	$("a.navlink").live("click", function(e){
		e.preventDefault();
		var linkurl     = $(this).attr("href");
		var linkhtmlurl = linkurl.substring(1, linkurl.length);
		
		var imgloader   = '<center style="margin-top: 223px; opacity:0.5;"><img src="img/loading.gif" alt="loading..." /></center>';
		
		//closeme();
		openme();
		
		$(function() {
			topbar.css("top", "0px");
			window.scrollTo(0, 1);
		});
		
		content.html(imgloader);
		
		setTimeout(function() { content.load(linkhtmlurl, function() { /* no callback */ }) }, 1200);
	});
});

if (navigator.userAgent.match(/(iPad.*|iPhone.*|iPod.*);.*CPU.*OS 7_\d/i)) {
    document.body.style.marginTop = '20px';
    document.getElementById('ios7-statusbar-fix').style.display = 'block';
}