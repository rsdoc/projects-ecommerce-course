function addData(event) {
  console.log('i am  in event data');
  event.emit('message', 'hello how are you?');
}

module.exports = addData;
