const express = require("express")
const bodyParser = require("body-parser")
const usersRouter = require("./routes/users")
const productsRouter = require("./routes/products")
const cartsRouter = require("./routes/carts")

const app = express()
const PORT = 8080

app.use(bodyParser.json())

//rutas
app.use("/users", usersRouter)
app.use("/products", productsRouter)
app.use("/carts", cartsRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})