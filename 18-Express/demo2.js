var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log('index get');
    res.send('Hello Get');
});

app.post('/', function(req, res) {
    console.log('index post');
    res.send('Hello Post');
});

app.get('/del', function(req, res) {
    console.log('del Get');
    res.send('del');
});

app.get('/list', function(req, res) {
    console.log('list Get');
    res.send('list');
});

app.get('/ab*cd/', function(req, res) {
    console.log('regex Get');
    res.send('regex');
});

var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('address: http://%s:%s', host, port);
});

