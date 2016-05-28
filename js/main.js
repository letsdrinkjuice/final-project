$('document').ready(function(){

	// INDEX.HTML -- RSVP MESH

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

	// GENERAL FUNCTIONS -- PAGES

	//when the mouse is moving, the overlay-skin is visible
	// when the mouse stops, the overlay-skin is hidden
	//siblings remain

//		$('overlay-skin')[0].onmousemove = (function() {
//		    var onmousestop = function() 
//	
//		    if ( 'event').onmousemove(); ) {
//		       $('.overlay-skin').hide().siblings().show();
//		    } else {
//		       $('.overlay-skin').hide();
//		        clearTimeout(thread);
//		        thread = setTimeout(onmousestop);
//		    };
//		})();

	var hide = setTimeout(function() {
	    $('#overlay').hide().siblings().show();
	}, 3000);

	$('body').mousemove(function() {
	    clearTimeout(hide);
	    var hide = setTimeout(function() {
	        $('#overlay').hide();
	    }, 3000);
	    $('#overlay').show();
	});


	// PREMIERE.HTML -- PREMIERE PAGE

	//when user click premiere h2
	//.prem-info div is displayed
	//after 15secs .prem-info fade out

	$('.more-info').on('click', function(event){
		event.preventDefault();

		$('.prem-info').fadeIn(750).delay(5000).fadeOut(750);
	});
});