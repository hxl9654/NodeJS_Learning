var fs = require('fs');

var readerStream = fs.createReadStream('2-input.txt');
var writerStream = fs.createWriteStream('8-output.txt');

readerStream.pipe(writerStream);

console.log('Program End.');