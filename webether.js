(function() {

    "use strict";

    fluid.registerNamespace("webether");

    var enviro = flock.init();

    webether.play = function() {
		
        var mySynth = flock.synth({
			synthDef: {
				ugen: "flock.ugen.square",
				freq: {
					ugen: "flock.ugen.mouse.cursor",

					// Note that we have to scale this unit generator's output
					// to a value range that is sensible for frequency.
					// By default,cursor outputs values between 0.0 and 1.0.
					mul: 1120,
					add: 60,
					options: {
						axis: "x",
						target: ".pad"
					}
				},
				mul: {
					ugen: "flock.ugen.mouse.cursor",
					options: {
						axis: "y",
						target: ".pad"
					}
				}
			}
		});
		enviro.start();
	};
}());