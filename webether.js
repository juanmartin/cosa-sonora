(function () {

    "use strict";

    fluid.registerNamespace("webether");

    var enviro = flock.init();

    webether.play = function () {
        var mySynth = flock.synth({
            synthDef: {
                ugen: "flock.ugen.sin",
                freq: {
                    ugen: "flock.ugen.lfNoise",
                    freq: 10,
                    mul: 380,
                    add: 60
                },
                mul: 0.1
            }
        });
        enviro.start();
    };

}());