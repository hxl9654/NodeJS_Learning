var net = require('net');
var server = net.createServer(function(connection) {
    console.log('clint connetted');
    connection.on('end', function() {
        console.log('connection closed');
    });
    connection.write('hello world');
    connection.pipe(connection);
});
server.listen(8080, function() {
    console.log('server is listening');
});