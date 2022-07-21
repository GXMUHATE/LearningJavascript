const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true}))//transform the data sent by a form into objects
app.use(bodyParser.json())//transform the data sent by json into object

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso.')
    })
})

//we need the bodyparser configured for this to work
//because we are getting files from a form
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

//app.get('/teste', (req, res) => res.send(new Date)) used just for testing
app.listen(8080, () => console.log('Executando...'))