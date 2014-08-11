
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


  	function newNumber() {
  		answer = Math.floor(Math.random() * 100) + 1;
  	}

  	function newGame() {
  		newNumber();
	  	count = 0;
  		$("#feedback").text("Make your Guess");
		$("#count").text(0);
		$("#guessList").empty();

  	}

  	function feedback(a) {
		if(a >= 50) {
			$("#feedback").text("Ice Cold");
		} else if ((50 > a) && (a >= 30)) {
			$("#feedback").text("Cold");
		} else if ((30 > a) && (a >= 20)) {
			$("#feedback").text("Warm");
		} else if ((20 > a) && (a >= 10)) {
			$("#feedback").text("Hot");
		} else if ((10 > a) && (a > 0)) {
			$("#feedback").text("Very Hot");
		} else if (a === 0) {
			$("#feedback").text("Correct!  Congratulations!");
		}
  	}


  	newGame();


  	$("#guessButton").on("click",
  		function(event) {
  			event.stopPropagation();
  			event.preventDefault();

  			var guess = $("#userGuess").val();
    		var dif = Math.abs(answer - guess);
    		// var dif1 = dif;

  			if ((101 > guess >= 1) && (guess % 1 === 0)) {
	   			feedback(dif);
	  			count++;
				$("#count").text(count);
				$("#guessList").append('<li>'+guess+'</li>');
				$("#userGuess").val("");
  			} else {
  				alert("Please enter a whole number from 1 to 100");
  			}


  		}
  	);  	

	$(".new").on("click", newGame);

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


