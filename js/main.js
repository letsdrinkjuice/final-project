$('document').ready(function(){

	//when i submit my email
	//the form is hidden
	//thank you appears
	$('form').submit(function(event){
		event.preventDefault();

		required = ["#email"];

		$('form').hide();
		$('#glistThanks').fadeIn(750).on('click', function(event){

			$('#rsvp').hide();
		});
	}); 

	//when the mouse is moving, the overlay-skin is visible
	// when the mouse stops, the overlay-skin is hidden
	//siblings remain

	$('.overlay-skin').bind('mousestop', function() {
  	
}); 



//	$('.overlay-skin')[0].onmousemove = (function() {
//	    var onmousestop = function() 
//
//	    if ( $('document').onmousemove(); ) {
//	       $('.overlay-skin').show();
//	    } else {
//	       $('.overlay-skin').hide();
//	        clearTimeout(thread);
//	        thread = setTimeout(onmousestop);
//	    };
//	})();

	//when user click premiere h2
	//.prem-info div is displayed
	//after 15secs .prem-info fade out

	$('.more-info').on('click', function(event){
		event.preventDefault();

		$('.prem-info').fadeIn(750).delay(5000).fadeOut(750);
	});
});