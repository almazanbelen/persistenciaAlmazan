const express = require("express")
const router = express.Router()
const cartsControllers = require("../controllers/cartsControllers")

router.get("/", cartsControllers.getAllCarts)

router.post("/", cartsControllers.createCart)

module.exports = router