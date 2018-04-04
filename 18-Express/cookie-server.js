var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var util = require('util');

app.use(cookieParser());

app.get('/', function(req, res) {
    console.log("cookies: " + util.inspect(req.cookies));
});

app.listen(8888);