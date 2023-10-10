//imports
const express = require("express")
const router = express.Router()
const productsControllers = require("../controllers/productsControllers")

//obtener products
router.get("/", productsControllers.getAllProducts)

//crear products
router.post("/", productsControllers.createProduct)

module.exports = router