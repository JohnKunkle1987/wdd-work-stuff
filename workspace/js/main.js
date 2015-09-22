
//	jquery javaScript
$(function(){
	
//	make links change "pages"
//================================================================
//	$('.page').css({'display':'none'});	
	
		
	
//	nav click events
//================================================================	
	$('.link').on('click', function(){
		
		var linkAction1 = $(this).attr('data-last');
		var linkAction2 = $(this).attr('data-this');

		$(linkAction1).delay().slideUp();
		$(linkAction2).slideDown();
	
		$('.this-class').css({'display':'none'});
		$('h3').css({'display':'none'});
		//$('input').css({'display':'none'});
	});
	

	
	
});

