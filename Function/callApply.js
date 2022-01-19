function getPreco(imposto = 0, moeda = 'Mt$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4590,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // calling a function directly
console.log(produto.getPreco()) // calling a function using an object

//calling a function using call and Apply

const carro = {preco: 82000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//diference between call and apply, we can see that it is on the way we put parameters

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))