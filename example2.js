	
	function hax(x) {
		return Object.is(Math.expm1(x), -0);
	}

	console.log(hax(-0));
	%OptimizeFunctionOnNextCall(hax);
	console.log(hax(-0));
