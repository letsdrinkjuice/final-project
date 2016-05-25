$('document').ready(function(){

	//when i submit my email
	//the form is hidden
	//thank you appears
	$('form').submit(function(event){
		event.preventDefault();

		required = ["#email"];

		$('form').hide();
		$('#glistThanks').fadeIn(750);

	}); 
});