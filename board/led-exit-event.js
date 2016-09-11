var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(7);
  led.on();
  console.log('Led on pin ' + led.pin + ' on!');

  this.on('exit', function() {
    console.log('Exit event launched!');
    led.off();
    console.log('Led on pin ' + led.pin + ' off!');
  });

});
