const bodyParser = require("body-parser")
const express = require("express")
const path = require('path')
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const cartRoutes = require("./routes/cart")

const app = express()

app.set('view engine', 'pug')
//app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path. join(__dirname, 'public')))
app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(cartRoutes)
app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404page.html'))
})

app.listen(3000)