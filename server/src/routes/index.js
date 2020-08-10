const { Router } = require('express');

const router = new Router();

router.use('/products', require('./product'));

module.exports = router;
