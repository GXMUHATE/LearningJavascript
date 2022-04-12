//Manualy creating the Map method
Array.prototype.map2 = function(calback){
    const newArray = []
    for(let i =0; i< this.length; i++ ){
        newArray.push(calback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 14.5 }',
    '{"nome": "Caderno", "preco": 20.0}',
    '{"nome": "Kit de Lapis", "preco": 140.5 }',
    '{"nome": "Caneta", "preco": 15.0}'
]

//return an array only with prices

const toObject = json => JSON.parse(json)
const onlyPrice = product => product.preco

const result = carrinho.map2(toObject).map2(onlyPrice)

console.log(result)