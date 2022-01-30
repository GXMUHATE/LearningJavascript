// dynamic colection of values key/value
const product = new Object
product.nome = 'Cadeira'
product['marca de produto'] = 'Generica'
product.preco = 340

console.log(product)
delete product.preco
delete product['marca de produto']
console.log(product)

const carr = {
    model: 'X7',
    value: 3450000,
    owner:{
        nome: 'Muhate',
        age: 31,
        address: {
            Av: 'Av de Mocambique',
            number: 123
        }
    },
    driver:[{
        name:'Pedro',
        age: 23
    }, {
        name: 'Sauli',
        age: 22
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carr.owner.address.number = 1434
carr['owner']['address']['Av'] = 'Av Romao Farrinha'
console.log(carr)