const { Router } = require('express');
const { GetUserList } = require('../controller/users');

const router = new Router();

router.get('/', GetUserList);

module.exports = router;
