let products = [];

module.exports = {
  getAllProducts: () => products,
  createProduct: (newProduct) => {
    products.push(newProduct);
  },
};
