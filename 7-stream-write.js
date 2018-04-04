var fs = require('fs');
var data  = "This is output data.";

var writerSteam = fs.createWriteStream('7-output.txt');
writerSteam.write(data, 'UTF-8');
writerSteam.end();

writerSteam.on('finish', function() {
    console.log('Done.');
});

writerSteam.on('error', function(err) {
    console.log(err.stack);
});

console.log('Program End.');