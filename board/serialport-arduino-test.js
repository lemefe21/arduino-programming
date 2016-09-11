var serialPort = require('serialport'); //instalar o npm

serialPort.list(function (err, ports) {

	console.log(ports);

	ports.forEach(function (port) {

		var regex = /arduino/i; //se contem arduino

		//var regex = /svfacdfava/i; //teste com erro de regex

		if (regex.test(port.manufacturer) || regex.test(port.pnpId)) {

			connect(port);

		} else {

			console.log("Nenhum arduino conectado");

		}

	});

});

//conexão com o arduino
function connect(port) {

	//metodo que faz a conexão SerialPort
	var arduino = new serialPort.SerialPort(port.comName, {
		baudrate: 9600
	});

	//quando OPEN execute a func
	arduino.on("open", function() {

		console.log("Conectado na porta " + port.comName);

		//escuta do arduino
		arduino.on("data", function (data) {

			console.log("Mensagem recebida: " + data)

		});

		//escreve na serial port do arduino
		arduino.write("a", function (err, data) {

			if(err){
				console.log("Erro: " + err);
			}

		});

		//escreve na serial port do arduino
		setInterval(function () {

			arduino.write("b", function (err, data) {

				if(err){
					console.log("Erro: " + err);
				}

			});

		}, 1000);

	});

};
