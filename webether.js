(function () {

    "use strict";

    fluid.registerNamespace("webether");

    var enviro = flock.init();

    webether.play = function () {
        var mySynth = flock.synth({
            synthDef: {
				ugen: "flock.ugen.square",
				freq: {
					ugen: "flock.ugen.mouse.cursor",
					mul: 1120
					add: 60
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