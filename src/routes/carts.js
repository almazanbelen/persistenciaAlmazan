//imports
const express = require("express")
const router = express.Router()
const cartsControllers = require("../controllers/cartsControllers")

//obtener carts
router.get("/", cartsControllers.getAllCarts)

//crear un cart
router.post("/", cartsControllers.createCart)

module.exports = router