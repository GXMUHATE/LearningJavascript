const port = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 145.65}) // converts to JSON
})

app.listen(port, () => {
    console.log(`Server is executing on port ${port}.`)
})