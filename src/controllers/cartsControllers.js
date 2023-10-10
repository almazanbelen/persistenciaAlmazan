const cartsService = require("../services/cartsServices")

function getAllCarts(req, res){
    const carts = cartsService.getAllCarts();
    res.json(carts)
}

function createCart(req, res){
    const newCart = req.body
    cartsService.createCart(newCart)
    res.status(201).json(newCart)
}

module.exports = {
    getAllCarts,
    createCart
}