	
	function hack_startBattleCountDown()
	{
		/* battleUserInfo_vs(); */
		
/* AMEND */
/*
		$(".battleNav-player-eyes").removeClass("battleNav-player-eyes-lookF").addClass("battleNav-player-eyes-lookC");
		
		$(".battleNav-player-eyes").removeClass("battleNav-player-eyes-lookF").addClass("battleNav-player-eyes-lookC");
*/
/* AMEND */
	
		$("#battle-nav-playerBird .battleCute-bird-board").addClass("tween-battleCute-bird-countDown");
		
	 	$("#battle-nav-playerBird .battleCute-bird-arm-left .battleCute-bird-board")[0].addEventListener("webkitAnimationEnd", hack_startBattleCountDownSequence, false);
	 	$("#battle-nav-playerBird .battleCute-bird-arm-left .battleCute-bird-board")[0].addEventListener("animationend", hack_startBattleCountDownSequence, false);		
	}
	
	function hack_startBattleCountDownSequence(event)
	{
	 	$("#battle-nav-playerBird .battleCute-bird-arm-left .battleCute-bird-board")[0].removeEventListener("webkitAnimationEnd", hack_startBattleCountDownSequence, false);
	 	$("#battle-nav-playerBird .battleCute-bird-arm-left .battleCute-bird-board")[0].removeEventListener("animationend", hack_startBattleCountDownSequence, false);
	 	
	 	$("#battle-nav-playerBird .battleCute-bird-arm-inner").addClass("tween-battleCute-bird-arm-main-fire");
	 			
	 	$("#battle-nav-playerBird .battleCute-eyes-sprite").removeClass("battleCute-eyes-norm").addClass("battleCute-eyes-happy");
	 	
	 	$("#battle-nav-playerBird .battleCute-bird-arm-main").addClass("tween-battleCute-bird-arm-main-intoFly");
	 			
	 	$("#battle-nav-playerBird .battleCute-bird-arm-main")[0].addEventListener("webkitAnimationEnd", hack_clearStageForFightInit, false);
	 	$("#battle-nav-playerBird .battleCute-bird-arm-main")[0].addEventListener("animationend", hack_clearStageForFightInit, false);
	 	
	 	/* $("#info-cloud p").text(BATTLE_NAV.navText.txt_START.toUpperCase()); */
	 	
	 	/* $("#info-cloud").css("opacity", "1"); */		
	}
	
	function hack_clearStageForFightInit(event)
	{
	 	var clearStage;
	 	
	 	$("#battle-nav-playerBird .battleCute-bird-arm-main")[0].removeEventListener("webkitAnimationEnd", hack_clearStageForFightInit, false);
	 	$("#battle-nav-playerBird .battleCute-bird-arm-main")[0].removeEventListener("animationend", hack_clearStageForFightInit, false);
	 	
	 	clearStage = new AnimationTimer();
	 	timerList_add(clearStage);
	 	clearStage.time(1, hack_clearStageForFight);	
	}
	
	function hack_clearStageForFight()
	{
		/* $("#info-cloud").css("opacity", "0"); */
		
		$("#battle-nav-playerBird .battleCute-bird-arm-main").removeClass("tween-battleCute-bird-arm-main-intoFly").addClass("tween-battleCute-bird-arm-main");
	 			
	 	$("#battle-nav-playerBird").addClass("tween-bird-flapAway");	
	
	 	$("#battle-nav-playerBird")[0].addEventListener("webkitAnimationEnd", hack_clearedStage, false);
	 	$("#battle-nav-playerBird")[0].addEventListener("animationend", hack_clearedStage, false);		
	}
	
	function hack_clearedStage(event)
	{
		var winLoseDisplay;
		
	 	/* $("#info-cloud p").text(BATTLE_NAV.navText["txt_" + BATTLE_NAV.game.result].toUpperCase()); */
	 	
	 	$("#battle-nav-playerBird")[0].removeEventListener("webkitAnimationEnd", hack_clearedStage, false);
	 	$("#battle-nav-playerBird")[0].removeEventListener("animationend", hack_clearedStage, false);
	 	
/*
		$(".battleNav-player-eyes").removeClass("battleNav-player-eyes-lookF").addClass("battleNav-player-eyes-lookC");
		
		$(".battleNav-player-eyes").removeClass("battleNav-player-eyes-lookF").addClass("battleNav-player-eyes-lookC");
*/
		
		test_punchPositionInit();
		
		$("#battle-nav-playerBird").remove(); 			
	 	
/* AMEND */
/*
		$("#battle-nav-player1 .battleCute-warrior-head .battleCute-eyes-sprite").removeClass("battleCute-eyes-look-C").addClass("battleCute-eyes-look-R");
		$("#battle-nav-player2 .battleCute-warrior-head .battleCute-eyes-sprite").removeClass("battleCute-eyes-look-C").addClass("battleCute-eyes-look-L");	
*/ 
/* AMEND */	
	 	

/* AMEND */	 	
/*
	 	$("#battle-nav-player1 .battleCute-speak-left").css("opacity", "1");
	 	$("#battle-nav-player2 .battleCute-speak-right").css("opacity", "1");
*/
/* AMEND */
	 	
	 	
	 	/* battleUserInfo_enemy(); */
	 	
/*
	 	winLoseDisplay = new AnimationTimer();
	 	timerList_add(winLoseDisplay);
	 	winLoseDisplay.time(2, battleNav_battleResults);
*/		
	}