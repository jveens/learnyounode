var http = require('http');
var path = process.argv[2];
var string = '';
var chars = 0;

http.get(path, function(res) {
	res.setEncoding('utf8');

	res.on('data', function(data) {
		string += data;
		chars += data.length;
	})

	res.on('end', function() {
		console.log(chars);
		console.log(string);
	})
})