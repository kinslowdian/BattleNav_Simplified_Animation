	
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
		
		testTimer = setTimeout(test_punchAttackSet, 2 * 1000, 1);
	}
	
	function test_punchAttackInit()
	{	
		BATTLE_NAV.animation.punchTotal = 10;
		BATTLE_NAV.animation.smashed = false;
		
		html_superPunch = $(".battleNav-superPunch").html();
		
		$(".battleNav-superPunch").html("");
	}
	
	function test_punchAttackSet(attackerReq)
	{
		if(attackerReq === 1)
		{
			BATTLE_NAV.animation.punch_id_attack = "battleNav-player1";
			BATTLE_NAV.animation.punch_id_victim = "battleNav-player2";			
		}
		
		if(attackerReq === 2)
		{
			BATTLE_NAV.animation.punch_id_attack = "battleNav-player2";
			BATTLE_NAV.animation.punch_id_victim = "battleNav-player1";			
		}
		
		test_punchAttackApply();			
	}
	
	function test_punchAttackApply()
	{
		// ATTACKER
		
		$("#" + BATTLE_NAV.animation.punch_id_attack).addClass("battleNav-superPunchAttacker");
		
		$("#" + BATTLE_NAV.animation.punch_id_attack + " .battleNav-player-eyes").addClass("battleNav-player-eyes-lookF");
		
		$("#" + BATTLE_NAV.animation.punch_id_attack + " .battleNav-player-hands").removeClass("tween-battleNav-player-hands");
		
		// VICTIM
		
		$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-head").removeClass("tween-battleNav-player-head");
		
		$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-hands").removeClass("tween-battleNav-player-hands");
		
		$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-head-main").addClass("tween-battleNav-smash");
		
		$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-body").addClass("tween-battleNav-smash");
		
		$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-legs").addClass("tween-battleNav-smash");
		
		$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-shockSprite").addClass("tween-battleNav-player-shockSprite");
		
		for(var i = 0; i < BATTLE_NAV.animation.punchTotal; i++)
		{
			var delay = i * 0.2;
			var stall = setTimeout(test_punchAttackAdd, delay * 1000, i);
		}
	}
	
	function test_punchAttackAdd(num)
	{
		var exitFrame;
		
		var css;
		
		$("#" + BATTLE_NAV.animation.punch_id_attack + " .battleNav-superPunch").append(html_superPunch);
		
		$("#" + BATTLE_NAV.animation.punch_id_attack + " ._PUNCH").addClass("SUPER-PUNCH" + num);
		$("#" + BATTLE_NAV.animation.punch_id_attack + " ." + "SUPER-PUNCH" + num).removeClass("_PUNCH");
		
		css = 	{
					"-webkit-animation-duration" : "0.1s !important",
					"animation-duration" : "0.1s !important"
				};
		
		if(num === BATTLE_NAV.animation.punchTotal - 1)
		{
			$("#" + BATTLE_NAV.animation.punch_id_attack + " ." + "SUPER-PUNCH" + num).addClass("KILLER-PUNCH");	
		}
	
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
		var _classList = event.target.classList.toString();
		var removeBlow;
		
		$(event.target)[0].removeEventListener("webkitTransitionEnd", test_punchAttackFireEnd, false);
		$(event.target)[0].removeEventListener("transitionend", test_punchAttackFireEnd, false);
		
		if(!BATTLE_NAV.animation.smashed)
		{
			BATTLE_NAV.animation.smashed = true;
			
			$("#" + BATTLE_NAV.animation.punch_id_attack + " .battleNav-player-hands").addClass("tween-battleNav-player-handsSuper");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-head").addClass("tween-battleNav-player-headWeak");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-hands").addClass("tween-battleNav-player-handsWeak");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-eyesSprite").removeClass("battleNav-player-eyesSprite-normal").addClass("battleNav-player-eyesSprite-sad");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-head-main").addClass("battleNav-smash-head");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-body").addClass("battleNav-smash-body");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-shockSprite").css("visibility", "visible");			
		}
		
		if(_classList.search("KILLER-PUNCH") === -1)
		{
			test_puchAttackReturn(event);			
		}
		
		else
		{
			$("#" + BATTLE_NAV.animation.punch_id_attack + " .battleNav-player-hands").removeClass("tween-battleNav-player-handsSuper");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-eyesSprite").removeClass("battleNav-player-eyesSprite-sad").addClass("battleNav-player-eyesSprite-happy");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-hands").removeClass("tween-battleNav-player-handsWeak");
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-head").removeClass("tween-battleNav-player-headWeak");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-head-main").addClass("battleNav-smash-head-KILLER");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-body").addClass("battleNav-smash-body-KILLER");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-legs").addClass("battleNav-smash-legs-KILLER");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-shockSprite").removeClass("tween-battleNav-player-shockSprite");
			
			$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-shock").addClass("tween-battleNav-player-shock");	
			
			removeBlow = setTimeout(test_puchAttackReturn, 500, event);
		}
	}
	
	function test_puchAttackReturn(event)
	{
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
			$("#" + BATTLE_NAV.animation.punch_id_attack).removeClass("battleNav-superPunchAttacker");
			
			$("#" + BATTLE_NAV.animation.punch_id_attack + " .battleNav-player-eyes").removeClass("battleNav-player-eyes-lookF");
			
			$("#" + BATTLE_NAV.animation.punch_id_attack + " .battleNav-player-hands").addClass("tween-battleNav-player-hands");
		
			if(BATTLE_NAV.animation.smashed)
			{
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-legs")[0].addEventListener("webkitTransitionEnd", test_punchAttackPurge, false);
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-legs")[0].addEventListener("transitionend", test_punchAttackPurge, false);
				
				
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-head").addClass("tween-battleNav-player-head");
				
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-hands").addClass("tween-battleNav-player-hands");
				
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-eyesSprite").removeClass("battleNav-player-eyesSprite-happy").addClass("battleNav-player-eyesSprite-normal");
				
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-head-main").removeClass("battleNav-smash-head-KILLER");
				
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-head-main").removeClass("battleNav-smash-head");
				
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-body").removeClass("battleNav-smash-body-KILLER");
			
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-body").removeClass("battleNav-smash-body");
				
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-legs").removeClass("battleNav-smash-legs-KILLER");
				
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-shockSprite").css("visibility", "hidden");
				
				$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-shock").removeClass("tween-battleNav-player-shock");	
				
				BATTLE_NAV.animation.smashed = false;
			}
		}
	}
	
	function test_punchAttackPurge(event)
	{
		$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-legs")[0].removeEventListener("webkitTransitionEnd", test_punchAttackPurge, false);
		$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-legs")[0].removeEventListener("transitionend", test_punchAttackPurge, false);
		
		$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-head-main").removeClass("tween-battleNav-smash");
		$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-body").removeClass("tween-battleNav-smash");
		$("#" + BATTLE_NAV.animation.punch_id_victim + " .battleNav-player-legs").removeClass("tween-battleNav-smash");		
	
		replayer();
	}
	
	function replayer()
	{
		var select = Math.ceil(Math.random() * 2);
		
		var r = setTimeout(test_punchAttackSet, 1 * 1000, select);
	}
	