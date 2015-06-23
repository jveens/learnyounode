var http = require('http');
var fs = require('fs');

// console.log(stream);

var server = 
	http.createServer( function(req, res) {
		var stream = fs.createReadStream(process.argv[3], { encoding: 'utf8', autoClose: true });
		stream.pipe(res);
	})
	server.listen(process.argv[2])