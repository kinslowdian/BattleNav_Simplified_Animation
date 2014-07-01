	
	var trace = function(str){ console.log(str); };
	
	var test;
	
	var player1;
	var player2;
	
	var TestTimer = function()
	{
		this.t = null;	
	};
	
	TestTimer.prototype.time = function(funct, secs)
	{
		this.t = setTimeout(funct, secs * 1000);
	}
	
	function runThis()
	{
		document.addEventListener("DOMContentLoaded", pageLoaded, false);
	}
	
	function pageLoaded(event)
	{
		document.removeEventListener("DOMContentLoaded", pageLoaded, false);
		
		player1 = document.getElementById("battleNav-player1");
		player2 = document.getElementById("battleNav-player2");
		
		test = setTimeout(runTests, 3 * 1000, "EYES_1");
		
		quick();
	}
	
	function quick()
	{
		var a = new TestTimer();
		
		a.time(quickCall, 5);
	}
	
	function quickCall()
	{
		alert("IT WORKS");
	}
	
	function runTests(request)
	{
		switch(request)
		{
			case "EYES_0":
			{
				changeEyes();
				
				break;
			}
			
			case "EYES_1":
			{
				lookEyes();
				break;
			}
		}
	}
	
	function changeEyes()
	{
		var eyes1;
		var eyes2;
		
		eyes1 	= player1.getElementsByClassName("battleNav-player-eyesSprite");
		eyes2 	= player2.getElementsByClassName("battleNav-player-eyesSprite");
		
		eyes1[0].classList.remove("battleNav-player-eyesSprite-normal");
		eyes1[0].classList.add("battleNav-player-eyesSprite-sad");
		
		eyes2[0].classList.remove("battleNav-player-eyesSprite-normal");
		eyes2[0].classList.add("battleNav-player-eyesSprite-happy");
	}
	
	function lookEyes()
	{
		var eyes1;
		var eyes2;
		
		eyes1 	= player1.getElementsByClassName("battleNav-player-eyes");
		eyes2 	= player2.getElementsByClassName("battleNav-player-eyes");
		
		eyes1[0].classList.add("battleNav-player-eyes-lookF");
		
		eyes2[0].classList.add("battleNav-player-eyes-lookF");		
	}