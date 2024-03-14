const bodyParser = require("body-parser")
const express = require("express")

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/dir', (req, res, next) =>{
    res.send("<h1>another directory</h1>")
})

app.use('/form', (req, res, next) =>{
    res.send("<form action='/act' method='POST'><input type='text' name='text' /><button type='submit'>button</button></form>")
})

app.post('/act', (req, res, next) =>{
    console.log(req.body)
    res.redirect("/")
})

app.use('/', (req, res, next) => {
    res.send("<h1>hello from node js server </h1>")
})

app.listen(3000)