const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    //res.send({nome: 'Notebook', preco: 145.65}) // converts to JSON
    res.send(dataBase.getProdutos())
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(dataBase.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = dataBase.saveProduct({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //generate a JSON to web
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = dataBase.saveProduct({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //generate a JSON to web
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = dataBase.excludeProduto(req.params.id)
    res.send(produto) //generate a JSON to web
})

app.listen(port, () => {
    console.log(`Server is executing on port ${port}.`)
})