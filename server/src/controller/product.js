const { GetProductList } = require('../models/product');

const GetProducts = (req, res) => {
  const pl = GetProductList();
  res.status(200).json({ data: pl });
};

module.exports = {
  GetProducts,
};
