const productsData = require("../persistence/productsData");

function getAllProducts() {
  return productsData.getAllProducts();
}

function createProduct(newProduct) {
  productsData.createProduct(newProduct);
}

module.exports = {
  getAllProducts,
  createProduct,
};
