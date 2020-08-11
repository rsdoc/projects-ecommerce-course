const { Router } = require('express');
const {
  GetUserList,
  GetUserById,
  UpdateUserById,
  CreateNewUser,
  DeleteUserById,
} = require('../controller/users');

const router = new Router();

router.get('/', GetUserList);
router.get('/:id', GetUserById);
router.put('/update/:id', UpdateUserById);
router.post('/create', CreateNewUser);
router.delete('/delete/:id', DeleteUserById);

module.exports = router;
