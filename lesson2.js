// console.log(process.argv.length);

var total = 0;

for (i=2; i<process.argv.length; i++) {
	var number = +process.argv[i];
	total += number;
}

console.log(total);