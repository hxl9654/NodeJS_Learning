var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('2-input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('9-output.txt.gz'));

console.log('File ziped');

fs.createReadStream('9-input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('9-output.txt'));

console.log('File unziped');