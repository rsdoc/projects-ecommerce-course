const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.username}:${process.env.password}@demo-server.xkwcj.mongodb.net?retryWrites=true&w=majority`;

const dbServer = new MongoClient(uri, {
  useUnifiedTopology: true,
});

let db;

dbServer
  .connect()
  .then(() => {
    console.log('db connected successfully');
    db = dbServer.db('user-service');

    // db.collection('users').insertMany(users);
  })
  .catch(() => {
    throw new Error('Error while connecting db');
  });

module.exports = { db };
