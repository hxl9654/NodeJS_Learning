var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/', function(req, res) {
    res.send('hello');
});

var server = app.listen(8888, function() {
    console.log('server started.');
});


