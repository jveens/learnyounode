var fs = require('fs');
var path = process.argv[2];
var buffer = fs.readFileSync(path);
var string = buffer.toString();

var lines = string.split('\n');

console.log(lines.length - 1);