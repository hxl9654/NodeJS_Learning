var express = require('express');
var app = express();

app.use(express.static('static'));
app.get('/index.html', function(req, res) {
    res.sendFile('d:\\NodeJS_Learning\\18-Express\\get-index.html');
});

app.get('/process_get', function(req, res) {
    var response = {
        'a': req.query.a,
        'b': req.query.b
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8888, function() {
    console.log('Server Started.');
});