console.log("Iniciando conexão com Johnny-five...");
var five = require("johnny-five");
console.log("Johnny-five on!");

console.log("Iniciando conexão com a placa Arduino...");
var board = new five.Board();
console.log("Arduino on! Board: " + board);

board.on("ready", function() {
  // Create an Led on pin 7
  var led = new five.Led(7);
  console.log("Led: " + led);
  // Blink every half second
  led.blink(500);
});
