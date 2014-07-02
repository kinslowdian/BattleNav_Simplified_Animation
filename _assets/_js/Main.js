	
	var trace = function(str){ console.log(str); };
	
	$(document).ready(function(){ init(); });
	
	var html_superPunch = "";
	
	var testTimer;
	
	var BATTLE_NAV;
	
	function init()
	{
		trace("init();");	
		
		
		BATTLE_NAV = {};
		
		BATTLE_NAV.animation = {};
		
		test_punchAttackInit();
		
		testTimer = setTimeout(test_punchAttackApply, 2 * 1000);
	}
	
	function test_punchAttackInit()
	{
		BATTLE_NAV.animation.punch_id_attack = "battleNav-player1";
		BATTLE_NAV.animation.punch_id_victim = "battleNav-player2";
		BATTLE_NAV.animation.punchTotal = 10;
		
		html_superPunch = $(".battleNav-superPunch").html();
		
		$(".battleNav-superPunch").html("");
	}
	
	function test_punchAttackApply(playerNum, punches)
	{
		$("#" + BATTLE_NAV.animation.punch_id_attack).addClass("battleNav-superPunchAttacker");
		
		$("#" + BATTLE_NAV.animation.punch_id_attack + " .battleNav-player-eyes").addClass("battleNav-player-eyes-lookF");
		
		for(var i = 0; i < BATTLE_NAV.animation.punchTotal; i++)
		{
			var de = i * 0.2;
			var st = setTimeout(test_punchAttackAdd, de * 1000, i);
		}
	}
	
	function test_punchAttackAdd(num)
	{
		var exitFrame;
		
		if(num === 0)
		{
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-eyesSprite").removeClass("battleNav-player-eyesSprite-normal").addClass("battleNav-player-eyesSprite-sad");
		}
		
		$("#" + BATTLE_NAV.animation.punch_id_attack + " .battleNav-superPunch").append(html_superPunch);
		
		$("#" + BATTLE_NAV.animation.punch_id_attack + " ._PUNCH").addClass("SUPER-PUNCH" + num);
		$("#" + BATTLE_NAV.animation.punch_id_attack + " ." + "SUPER-PUNCH" + num).removeClass("_PUNCH");
	
		exitFrame = setTimeout(test_punchAttackFire, 20, $("#" + BATTLE_NAV.animation.punch_id_attack + " ." + "SUPER-PUNCH" + num));
	}
	
	function test_punchAttackFire(div)
	{
		$(div)[0].addEventListener("webkitTransitionEnd", test_punchAttackFireEnd, false);
		$(div)[0].addEventListener("transitionend", test_punchAttackFireEnd, false);
		
		$(div).addClass("battleNav-superPunchAttack");
	}
	
	function test_punchAttackFireEnd(event)
	{
		$(event.target)[0].removeEventListener("webkitTransitionEnd", test_punchAttackFireEnd, false);
		$(event.target)[0].removeEventListener("transitionend", test_punchAttackFireEnd, false);
			
		$(event.target)[0].addEventListener("webkitTransitionEnd", test_punchAttackComplete, false);
		$(event.target)[0].addEventListener("transitionend", test_punchAttackComplete, false);
		
		$(event.target).removeClass("battleNav-superPunchAttack").addClass("battleNav-superPunchReturn");
	}
	
	function test_punchAttackComplete(event)
	{
		$(event.target)[0].removeEventListener("webkitTransitionEnd", test_punchAttackComplete, false);
		$(event.target)[0].removeEventListener("transitionend", test_punchAttackComplete, false);
		
		$(event.target).remove();
		
		if($("#" + BATTLE_NAV.animation.punch_id_attack + " .battleNav-superPunch div").length === 0)
		{
			$("#" + BATTLE_NAV.animation.punch_id_attack + " .battleNav-player-eyes").removeClass("battleNav-player-eyes-lookF");
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-eyesSprite").removeClass("battleNav-player-eyesSprite-sad").addClass("battleNav-player-eyesSprite-normal");
		}
	}
	