const productsService = require("../services/productsServices");

function getAllProducts(req, res) {
  const products = productsService.getAllProducts();
  res.json(products);
}

function createProduct(req, res) {
  const newProduct = req.body;
  productsService.createProduct(newProduct);
  res.status(201).json(newProduct);
}

module.exports = {
  getAllProducts,
  createProduct,
};
