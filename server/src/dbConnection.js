const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.username}:${process.env.password}@demo-server.xkwcj.mongodb.net?retryWrites=true&w=majority`;

let dbInstance;

const dbServer = new MongoClient(uri, {
  useUnifiedTopology: true,
});

dbServer
  .connect()
  .then(() => {
    console.log('db connected successfully');
    dbInstance = dbServer.db('user-service');
  })
  .catch(() => {
    throw new Error('Error while connecting db');
  });

function getDb() {
  return dbInstance;
}

module.exports = { getDb };
