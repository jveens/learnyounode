var http = require('http');

var path1 = process.argv[2];
var path2 = process.argv[3];
var path3 = process.argv[4];

var paths = [
				path1, 
				path2, 
				path3
			];

// var msgs = [ '', '', '' ];

var string1 = '';
var string2 = '';
var string3 = '';

// var strings = [string1, string2, string3];

// var count = 0;

// for (var i = 0; i < paths.length; i++) {

// 	// console.log(paths[i]);

// 	http.get( paths[i], function(res) {

// 		res.setEncoding('utf8');

// 		res.on('data', function(data) {
// 			msgs[i] += data;	
// 			// console.log(msgs[i])
// 		})

// 		res.on('end', function() {
// 			console.log(msgs[i]);
// 			count++;
// 			// msgs.push(msgs[i]);
// 			// string = '';
// 			if (count === 3) {
// 				console.log(msgs[0]);
// 				// console.log('..');
// 				console.log(msgs[1]);
// 				// console.log('..');
// 				console.log(msgs[2]);
// 			}
// 		})

// 	})
// }

http.get( path1, function(res) {

	res.setEncoding('utf8');

	res.on('data', function(data) {
		string1 += data;
	})

	res.on('end', function() {

		http.get( path2, function(res) {
			res.setEncoding('utf8');

			res.on('data', function(data) {
				string2 += data;
			})

			res.on('end', function() {

				http.get (path3 , function(res) {
					res.setEncoding('utf8');

					res.on('data', function(data) {
						string3 += data;
					})

					res.on('end', function() {
						console.log(string1);
						console.log(string2);
						console.log(string3);
					})
				})
			})
		})
	})
})