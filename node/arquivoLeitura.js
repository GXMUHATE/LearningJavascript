const fs = require('fs')
//__dirname - represents actual folder
const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db) // it is better if you want to use to connect to DB

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})