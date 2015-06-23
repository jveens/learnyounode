var net = require('net');

var server = net.createServer( function(socket) {
			
			var date = new Date();
			var month = addZero(stringify(date.getMonth() + 1));
			var day = addZero(stringify(date.getDate() ) );
			var hours = addZero(stringify(date.getHours() ) );
			var minu = addZero(stringify(date.getMinutes() ) );
				
			socket.write(date.getFullYear() +'-'+ month +'-'+ day + ' '+ hours +':'+ minu + '\n')
			
			socket.end();
			})
			server.listen(process.argv[2]);

var addZero = function(i) {
	if (i < 10) {
		i = '0' + i;
	}
	return i
}

var stringify = function(i) {
	if (typeof i != 'string') {
		i.toString();
	}
	return i;
}