var fs = require("fs");

var readStream = fs.createReadStream('input.txt');
var WriteStream = fs.createWriteStream('output.txt');

readStream.pipe(WriteStream);
console.log('Program Completed');