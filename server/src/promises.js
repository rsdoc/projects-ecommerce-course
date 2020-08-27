const axios = require('axios');

const users = () => axios.get('https://jsonplaceholder.typicode.com/users');

const photos = () => axios.get('https://jsonplaceholder.typicode.com/photos');

users().then((res) => console.log(res.data[0]));
photos().then((res) => console.log(res.data[0]));

Promise.all([users, photos])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
