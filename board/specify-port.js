var five = require("johnny-five");

// Johnny-Five will try its hardest to detect the port for you,
// however you may also explicitly specify the port by passing
// it as an optional property to the Board constructor:
var board = new five.Board({
  port: "/dev/ttyACM0"
});

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function() {

  this.pinMode(7, this.MODES.OUTPUT);

  console.log(this.pins[7]);
  var pin7 = this.pins[7];

  //board.digitalWrite(7, 1); Turn it on...
  //board.digitalWrite(7, 0); Turn it off...
  this.loop(500, function() {
    console.log('Value of Pin 7: ' + pin7.value);
    board.digitalWrite(7, pin7.value ? 0 : 1);
  });

  this.on('exit', function() {
    console.log('Exit event launched!');
    board.digitalWrite(7, 0);
    console.log('Led of pin 7 off!');
  });

});
