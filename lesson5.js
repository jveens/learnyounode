var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];
var total = 0;
var result = [];

fs.readdir( path, function(err, list) {

	if (err) {
		return err;
	}
	else {
		var exten = '.' + ext;

		for (var i=0; i < list.length; i++) {
			if (list[i].indexOf(exten) > 0) {
				total += 1;
				result.push(list[i]);
			}
		}	
	
		for (var i=0; i<result.length; i++) {
			console.log(result[i]);
		}

	}
})