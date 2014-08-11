
$(document).ready(function(event){
	// event.preventDefault();
	// event.stopPropagation();	

	$("h1").fadeIn(2000);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// valid inputs

  	var answer = Math.floor(Math.random() * 100) + 1;
  	var count = 0;

  	$("#guessButton").on("click",
  		function(event) {
  			event.stopPropagation();
  			event.preventDefault();

  			var guess = $("#userGuess").val();
  			// guess = +guess;
  			// var answer = 25;
  			var difference = answer - guess;
    		var avDif = Math.abs(difference);

  			if ((101 > guess >= 1) && (guess % 1 === 0)) {
	   			
	   			if(avDif >= 50) {
	  				$("#feedback").text("Ice Cold");
	  			} else if ((50 > avDif) && (avDif >= 30)) {
	  				$("#feedback").text("Cold");
	  			} else if ((30 > avDif) && (avDif >= 20)) {
	  				$("#feedback").text("Warm");
	  			} else if ((20 > avDif) && (avDif >= 10)) {
	  				$("#feedback").text("Hot");
	  			} else if ((10 > avDif) && (avDif > 0)) {
	  				$("#feedback").text("Very Hot");
	  			} else if (avDif === 0) {
	  				$("#feedback").text("Correct!  Congratulations!");
	  			}
	  				
	  			count++;
				$("#count").text(count);

				$("#guessList").append('<li>'+guess+'</li>');

				$("#userGuess").val("");

  			} else {
  				alert("Please enter a whole number from 1 to 100");
  			}


  		}
  	);  	

	$(".new").on("click", function() {

		$("#feedback").text("Make your Guess");
		$("#count").text(0);
		$("#guessList").empty();
		answer = Math.floor(Math.random() * 100) + 1;
	  	count = 0;

	});

  	// Use enter key

  	$(document).on("keydown",
  		function(e) {
  			if(e.which === 13) {
  				event.stopPropagation();
  				event.preventDefault();
  				$("#guessButton").click();
  			}
  		}
  	);


});


