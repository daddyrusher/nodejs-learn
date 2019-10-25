const events = require('events');
const eventEmitter = new events.EventEmitter();

//add listeners
const listener1 = function listener1() {
    console.log('listener1 executed');
};
const listener2 = function listener2() {
    console.log('listener2 executed')
};

//register listeners
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

//get listeners count
let eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + ' listeners listening to connection event');

//start event
eventEmitter.emit('connection');

//remove listener
eventEmitter.removeListener('connection', listener1);
console.log('listener1 will non listen now');

//start event
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + ' listeners listening to connection event');

console.log('Program ended');
