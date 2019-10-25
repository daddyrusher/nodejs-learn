const events = require('events');
const eventEmitter = new events.EventEmitter();
const connectHandler = function connected() {
    console.log('connection successful');
    eventEmitter.emit('data_received');
};

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function () {
    console.log('data received successfully.');
});
eventEmitter.emit('connection');

console.log('Program ended');
