const { getDb } = require('../dbConnection');
const { ObjectId } = require('mongodb');

const GetDbUsers = () => {
  return new Promise((resolve, reject) => {
    const db = getDb();
    db.collection('users')
      .find()
      .toArray((err, docs) => {
        if (err) {
          return reject({ message: 'Error - Ops internal server error' });
        }
        resolve(docs);
      });
  });
};

const GetDbUserById = (users_id) => {
  return new Promise((resolve, reject) => {
    const db = getDb();
    db.collection('users')
      .find({ _id: ObjectId(users_id) })
      .toArray((err, docs) => {
        if (err) {
          return reject({ message: 'Error - Ops internal server error' });
        }
        resolve(docs);
      });
  });
};

const UpdateDbUserById = (users_id, props) => {
  return new Promise((resolve, reject) => {
    const db = getDb();
    db.collection('users').updateOne(
      { _id: ObjectId(users_id) },
      { $set: props },
      (err, result) => {
        if (err) {
          return reject({ message: 'Error - Ops internal server error' });
        }
        resolve(result);
      }
    );
  });
};

const CreateDbUser = (user) => {
  return new Promise((resolve, reject) => {
    const db = getDb();
    db.collection('users').insertOne(user, (err, result) => {
      if (err) {
        return reject({ message: 'Error - Ops internal server error' });
      }
      resolve(result);
    });
  });
};

const DeleteDbUserById = (user_id) => {
  return new Promise((resolve, reject) => {
    const db = getDb();
    db.collection('users').deleteOne(
      { _id: ObjectId(user_id) },
      (err, result) => {
        if (err) {
          return reject({ message: 'Error - Ops internal server error' });
        }
        resolve(result);
      }
    );
  });
};

module.exports = {
  GetDbUsers,
  GetDbUserById,
  UpdateDbUserById,
  CreateDbUser,
  DeleteDbUserById,
};
