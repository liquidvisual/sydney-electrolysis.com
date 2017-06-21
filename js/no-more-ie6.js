//-------------------------------------------------------------------
// Prompt a browser upgrade
//-------------------------------------------------------------------

$(document).ready(function() {
	
	// Correct IE6 from screwing with vertical centering
	
	$('html').css("overflow", "hidden");
	
	// Remove the page contents
	
	$(".page").remove();

	var $body = $("body");
	
	// Tweak to allow centering
	
	$body.css({ "min-width" : "0" });
	
	// Dynamically add the prompt box
	
	var $msgBox = $body.append("<a href='http://www.google.com/chrome/'><img src='img/layout/no-more-ie6.png' alt='No More IE6!' /></a>");
	
	// Style the prompt box and center
	
	$msgBox.css({ "padding-top" : "15%" , "width" : "276px" , "display" : "block" , "margin" : "0 auto" });
   	
})
 
 
      

