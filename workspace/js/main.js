$(document).ready(function(){
    
    

    $("#launch a").click(function() {
    $('html, body').animate({
        scrollTop: $("#test").offset().top
    }, 1000);
    });
    
    
    //Page blinks when this is clicked
    $("footer section #up").click(function() {
    $('html, body').animate({
        scrollTop: $("#launch").offset().top
   }, 1000);
});

    
	
	$(".solBtn").click(function(){
			console.log("clicked");
			if ($(this).text() === "Solution")
			{
				console.log("and true");
				$(this).siblings("div").slideDown(1000);
				//$(this).parent().css("padding", "0px");
				$(this).text("Hide");
			}
			else if ($(this).text() === "Hide")
			{
				console.log("and false");
				$(this).siblings("div").slideUp(1000);
			//	$(this).parent().css("padding", "15px");
				$(this).text("Solution");
			}
		});
	
});
