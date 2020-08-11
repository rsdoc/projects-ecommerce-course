const {
  GetDbUsers,
  GetDbUserById,
  UpdateDbUserById,
  CreateDbUser,
  DeleteDbUserById,
} = require('../models/users');

const CreateNewUser = async (req, res) => {
  try {
    await CreateDbUser(req.body);
    res.status(200).json({ message: 'user created successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error while creating user' });
  }
};

const GetUserList = async (req, res) => {
  try {
    const ul = await GetDbUsers();
    res.status(200).json({ users: ul });
  } catch (err) {
    res.status(400).json({ users: [] });
  }
};

const GetUserById = async (req, res) => {
  try {
    const user_id = req.params.id;
    const user = await GetDbUserById(user_id);
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ user: {} });
  }
};

const UpdateUserById = async (req, res) => {
  try {
    const user_id = req.params.id;
    const user = await UpdateDbUserById(user_id, req.body);
    res.status(200).json({ message: 'updated users successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error while updating user' });
  }
};

const DeleteUserById = async (req, res) => {
  try {
    const user_id = req.params.id;
    await DeleteDbUserById(user_id);
    res.status(200).json({ message: 'deleted users successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error while updating user' });
  }
};

module.exports = {
  GetUserList,
  GetUserById,
  UpdateUserById,
  CreateNewUser,
  DeleteUserById,
};
