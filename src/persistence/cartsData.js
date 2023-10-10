let carts = [];

module.exports = {
  getAllCarts: () => carts,
  createCart: (newCart) => {
    carts.push(newCart);
  },
};
