	
	var trace = function(str){ console.log(str); };
	
	$(document).ready(function(){ init(); });
	
	var html_superPunch = "";
	
	var testTimer;
	
	function init()
	{
		trace("init();");	
	
		test_punchAttackInit();
		
		testTimer = setTimeout(test_punchAttackApply, 2 * 1000, 1, 10);
	}
	
	function test_punchAttackInit()
	{
		html_superPunch = $(".battleNav-superPunch").html();
		
		$(".battleNav-superPunch").html("");
	}
	
	function test_punchAttackApply(playerNum, punches)
	{
		var _id = "battleNav-player" + playerNum;
		
		$("#" + _id).addClass("battleNav-superPunchAttacker");
		
		for(var i = 0; i < punches; i++)
		{
			var de = i * 0.2;
			var st = setTimeout(test_punchAttackAdd, de * 1000, _id, i);
		}
	}
	
	function test_punchAttackAdd(div, num)
	{
		var exitFrame;
		
		$("#" + div + " .battleNav-superPunch").append(html_superPunch);
		
		$("#" + div + " ._PUNCH").addClass("SUPER-PUNCH" + num);
		$("#" + div + " ." + "SUPER-PUNCH" + num).removeClass("_PUNCH");
	
		exitFrame = setTimeout(test_punchAttackFire, 20, $("#" + div + " ." + "SUPER-PUNCH" + num));
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
	}
	