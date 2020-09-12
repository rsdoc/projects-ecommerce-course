process.on('message', (message) => {
  console.log('Message from parent', message);
});

let c = 0;

setInterval(() => {
  process.send({ c: c++ }); // to parent
  if (c === 10) {
    process.exit();
  }
}, 1000);

// monolithic
