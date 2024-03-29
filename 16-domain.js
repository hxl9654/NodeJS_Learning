var EventEmitter = require('events').EventEmitter;
var domain = require('domain');

var emitter1 = new EventEmitter();

var domain1 = domain.create();
domain1.on('error', function(err) {
    console.log('domain1 is hanlding this error: ' + err.message);
});
domain1.add(emitter1);

emitter1.on('error', function(err) {
    console.log('moniter is hanlding this error: ' + err.message);
});
emitter1.emit('error', new Error('moniter'));
emitter1.removeAllListeners('error');
emitter1.emit('error', new Error('domain1'));

var domain2 = domain.create();
domain2.on('error', function(err) {
    console.log('domain2 is hanlding this error: ' + err.message);
});

domain2.run(function() {
    var emitter2 = new EventEmitter();
    emitter2.emit('error', new Error('domain2'));
});

domain1.remove(emitter1);
emitter1.emit('error', new Error('Program crash.'));