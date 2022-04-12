const carrinho = [
    '{"nome": "Borracha", "preco": 14.5 }',
    '{"nome": "Caderno", "preco": 20.0}',
    '{"nome": "Kit de Lapis", "preco": 140.5 }',
    '{"nome": "Caneta", "preco": 15.0}'
]

//return an array only with prices

const toObject = json => JSON.parse(json)
const onlyPrice = product => product.preco

const result = carrinho.map(toObject).map(onlyPrice)

console.log(result)