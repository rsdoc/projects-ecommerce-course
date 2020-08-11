const { GetDbUsers } = require('../models/users');

const GetUserList = (req, res) => {
  const ul = GetDbUsers();
  res.status(200).json({ data: ul });
};

module.exports = {
  GetUserList,
};
