let events = require('events');
let myEmitter = new events.EventEmitter();

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

myEmitter.on('celebration', listenerCallback);
myEmitter.emit('celebration', 'Hello this is emit');

let version = (data) => {
    console.log(`participant : ${data}`);
}
myEmitter.on('new user', version);
myEmitter.emit('new user', 'Jithin')

