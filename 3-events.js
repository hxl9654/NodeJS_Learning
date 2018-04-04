var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('Connected.');
    eventEmitter.emit('data_resived');
};
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_resived', function() {
    console.log('Data resived.');
});
eventEmitter.emit('connection');
console.log('Program End.');