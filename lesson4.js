var fs = require('fs');
var path  = process.argv[2];

var lines;

fs.readFile( path, 'utf8', function(err, data) {
	if (err) {
		return err;
	}
	else {
		lines = data.split('\n');
		console.log(lines.length - 1);
	}
})