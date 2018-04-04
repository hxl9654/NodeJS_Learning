var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');
/*
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(8888);
*//*
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    var params = url.parse(req.url, true).query;
    res.write('a:' + params.a + '\n');
    res.write('b:' + params.b + '\n');
    res.end();
}).listen(8888);
*/
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  'a <input name="a"><br>' +
  'b <input name="b"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
http.createServer(function(req, res) {
    var post = '';
    req.on('data', function(chunk) {
        post += chunk;
    });

    req.on('end', function() {
        post = querystring.parse(post);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        if(post.a || post.b) {
            res.write('a:' + post.a + '\n');
            res.write('b:' + post.b + '\n');
        } else {
            res.write(postHTML);
        }
        res.end();
    });
}).listen(8888);