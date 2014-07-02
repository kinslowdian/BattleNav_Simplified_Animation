	
	var trace = function(str){ console.log(str); };
	
	$(document).ready(function(){ init(); });
	
	var html_superPunch = "";
	
	var testTimer;
	
	function init()
	{
		trace("init();");	
	
		test_punchAttackInit();
		
		testTimer = setTimeout(test_punchAttackApply, 2 * 1000, 2);
	}
	
	function test_punchAttackInit()
	{
		html_superPunch = $(".battleNav-superPunch").html();
		
		$(".battleNav-superPunch").html("");
	}
	
	function test_punchAttackApply(playerNum)
	{
		var _id = "battleNav-player" + playerNum;
		
		$("#" + _id).addClass("battleNav-superPunchAttacker");
		
		for(var i = 0; i < 10; i++)
		{
			var de = i * 0.2;
			var st = setTimeout(test_punchAttackAdd, de * 1000, _id, i);
		}
	}
	
	function test_punchAttackAdd(div, num)
	{
		var exitFrame;
		
		$("#" + div + " .battleNav-superPunch").append(html_superPunch);
		
		// $('[data-asset == "superPunch"]').attr("id", "superPunch" + num);
		
		// $("#" + div + " #superPunch" + num).removeAttr("data-asset");
		
		//$("#" + div + " #superPunch" + num).addClass("battleNav-superPunchAttack");
		
		//$("#" + div + " #_PUNCH").attr("id", "superPunch" + num);
		
		// $("#" + div + " ._PUNCH").attr("id", "superPunch" + num);
		
		// $("#" + div + " #superPunch" + num).removeClass("_PUNCH");
		
		$("#" + div + " ._PUNCH").addClass("SUPER-PUNCH" + num);
		$("#" + div + " ." + "SUPER-PUNCH" + num).removeClass("_PUNCH");
		
		//$("#" + div + " #superPunch" + num).addClass("battleNav-superPunchAttack");
	
		exitFrame = setTimeout(test_punchAttackFire, 20, $("#" + div + " ." + "SUPER-PUNCH" + num));
	}
	
	function test_punchAttackFire(div)
	{
		$(div)[0].addEventListener("webkitTransitionEnd", testPunchAttackFireEnd, false);
		$(div)[0].addEventListener("transitionend", testPunchAttackFireEnd, false);
		
		$(div).addClass("battleNav-superPunchAttack");
	}
	
	function testPunchAttackFireEnd(event)
	{
		trace(event);
		
		$(event.target)[0].removeEventListener("webkitTransitionEnd", testPunchAttackFireEnd, false);
		$(event.target)[0].removeEventListener("transitionend", testPunchAttackFireEnd, false);
		
		$(event.target)[0].addEventListener("webkitTransitionEnd", testPunchAttackComplete, false);
		$(event.target)[0].addEventListener("transitionend", testPunchAttackComplete, false);
	
		$(event.target).removeClass("battleNav-superPunchAttack").addClass("battleNav-superPunchReturn");
	}
	
	function testPunchAttackComplete(event)
	{
		$(event.target)[0].removeEventListener("webkitTransitionEnd", testPunchAttackComplete, false);
		$(event.target)[0].removeEventListener("transitionend", testPunchAttackComplete, false);
		
		$(event.target).css("opacity", "0");
	}
	