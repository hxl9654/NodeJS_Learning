var events = require('events');
var eventsEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log('Listener1 done.');
};

var listener2 = function listener2() {
    console.log('Listener2 done.');
};

eventsEmitter.addListener('connection', listener1);
eventsEmitter.on('connection', listener2);

var EventListeners = events.EventEmitter.listenerCount(eventsEmitter, 'connection');
console.log('Count: '+ EventListeners);

eventsEmitter.removeListener('connection', listener1);
console.log('Listener1 removed.');

eventsEmitter.emit('connection');

var EventListeners = events.EventEmitter.listenerCount(eventsEmitter, 'connection');
console.log('Count: '+ EventListeners);

console.log('Program End.');