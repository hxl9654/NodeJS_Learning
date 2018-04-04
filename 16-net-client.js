var net = require('net');
var clint = net.connect({port: 8080}, function() {
    console.log('connected.');
});
clint.on('data', function(data) {
    console.log(data.toString());
    clint.end();
});
clint.on('end', function() {
    console.log('disconnected');
});