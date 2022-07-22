const EventEmitter = require('events');
const { start } = require('repl');
const eventEmitter = new EventEmitter();

//emit is used to trigger the event.
// on is used to add a callback function that going to be executed when event trigger.

// eventEmitter.on('start',(start, end)=>{
//     console.log(`event started ${start} to ${end}`);
// });
// eventEmitter.emit('start',1,100);

// console.log(typeof(eventEmitter));
eventEmitter.once('start',(start)=>{
    console.log(` Started  @ ${start}`);
})
eventEmitter.emit('start',200)


