var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static('static'));

app.get('/', function(req, res) {
    res.sendFile('d:\\NodeJS_Learning\\18-Express\\post-index.html');
});

app.post('/process_post', urlencodedParser, function(req, res) {
    var response = {
        'a': req.body.a,
        'b': req.body.b
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8888, function(req, res) {
    console.log('Server Started.');
});