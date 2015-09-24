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

    
});
