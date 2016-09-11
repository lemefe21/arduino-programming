var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(7);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
  });

  led.blink();

  this.on('exit', function() {
    console.log('Exit event launched!');
    led.off();
    console.log('Led on pin ' + led.pin + ' off!');
  });
  
});

//REPL
//>> led.stop() // to stop blinking
// then
//>> led.off()  // to shut it off (stop doesn't mean "off")
// then
//>> led.on()   // to turn on, but not blink
