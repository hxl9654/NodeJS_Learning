var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('static'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp'}).array('image'));

app.get('/', function(req, res) {
    res.sendFile('d:\\NodeJS_Learning\\18-Express\\file-index.html');
});

app.post('/file_upload', function(req, res) {
    console.log(req.files[0]);

    var des_file = __dirname + '/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if(err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded.',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8888, function() {
    console.log('Server Started');
});