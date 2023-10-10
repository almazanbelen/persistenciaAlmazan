const cartsData = require("../persistence/cartsData");

function getAllCarts() {
  return cartsData.getAllCarts();
}

function createCart(newCart) {
  cartsData.createCart(newCart);
}

module.exports = {
  getAllCarts,
  createCart,
};
