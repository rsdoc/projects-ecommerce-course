const EventEmitter = require('events');

const addData = require('./module2');

const msgEvt = new EventEmitter();

msgEvt.on('message', (data) => {
  console.log('I got the data line 8', data);
});

// msgEvt.emit('message', { message: 'user login' });

addData(msgEvt);
