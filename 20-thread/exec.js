const fs = require('fs');
const chile_Process = require('child_process');

for(var i = 0; i < 3; i++) {
    var workerProcess = chile_Process.exec('node ' + __dirname + '\\support.js ' + i, function(err, stdout, stderr) {
        if(err) {
            console.log(err.stack);
            console.log('errcode: ' + err.code);
            console.log('errsingal: ' + err.singal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function(code) {
        console.log('Worker exit: ' + code);
    });
}