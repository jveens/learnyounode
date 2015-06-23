var module = require('./lesson6mod.js');

var dir = process.argv[2];
var file = process.argv[3];

module(dir, file, function(err, list) {
	if (err) {
		return console.error(err)
	}
	else {
		list.forEach(function(file) {
			console.log(file);
		})
	}
});

