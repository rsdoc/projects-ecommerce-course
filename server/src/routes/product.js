const { Router } = require('express');
const { GetProducts } = require('../controller/product');

const router = new Router();

router.get('/', GetProducts);

module.exports = router;
