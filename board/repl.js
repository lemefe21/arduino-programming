var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  console.log("Ready event. Repl instance auto-initialized!");

  var led = new five.Led(7);
  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    help: 'on() - Ligar, off() - Desligar, strobe(500) - Piscar(milissegundos)',
    on: function() {
      led.stop().on();
    },
    off: function() {
      led.stop().off();
    },
    strobe: function(milli) {
      led.strobe(milli);
    }
  });

  this.on('exit', function() {
    console.log('Exit event launched!');
    led.off();
    console.log('Led on pin ' + led.pin + ' off!');
  });

});

//REPL
//>> help // to 'on() - Ligar, off() - Desligar, strobe(500) - Piscar(milissegundos)'
//>> on()  // will turn on the LED
// or
//>> off() // will turn off the LED
// or
//>> strobe() // will strobe the LED
