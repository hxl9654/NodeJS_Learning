var fs = require('fs');

fs.open('14-input.txt', 'r+', function(err, fs) {
    if(err) {
        return console.error(err);
    }
    console.log('Open Done.');
});

fs.stat('14-input.txt', function(err, stats) {
    if(err) {
        return console.error(err);
    }
    console.log(stats);
    console.log('isFile? ' + stats.isFile());
    console.log('isDir? ' + stats.isDirectory());
    console.log('Stats Done.');
});

fs.writeFile('14-output.txt', 'This is 14-output.txt', function(err) {
    if(err) {
        return console.error(err);
    }
    console.log('Write Done.');
});

var buf = new Buffer(64);
fs.open('2-input.txt', 'r+', function(err, fd) {
    if(err) {
        return console.error(err);
    }
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if(err) {
            console.log(err);
        }
        console.log(bytes + ' bytes readed.');

        if(bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }

        fs.close(fd, function(err) {
            if(err) {
                console.log(err);
            }
        });
    });
});

fs.open('2-input.txt', 'r+', function(err, fd) {
    if(err) {
        return console.error(err);
    }
    
    fs.truncate(fd, 10, function(err) {
        if(err) {
            console.log(err);
        }
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
            if(err) {
                console.log(err);
            }

            if(bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }

            fs.close(fd, function(err) {
                if(err) {
                    console.log(err);
                }
            });
        });
    });
});
/*
fs.unlink('14-unlink.txt', function(err) {
    if(err) {
        return console.error(err);
    }
});
*//*
fs.mkdir('./test/', function(err) {
    if(err) {
        return console.error(err);
    }
});
*//*
fs.readdir('./', function(err, files) {
    if(err) {
        return console.error(err);
    }

    files.forEach(function(file) {
        console.log(file);
    });
});
*//*
fs.rmdir('./test', function(err) {
    if(err) {
        return console.error(err);
    }
});
*/