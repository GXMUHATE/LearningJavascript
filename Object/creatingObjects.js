// using literal notation
const obj1 = {}
console.log(obj1)

//object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funcoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = ()=>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Lapis', 12.5, 0.17)
const p2 = new Produto('Laptop', 29000, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Factory Function
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Rain', 23000, 2)
const f2 = criarFuncionario('Elton', 15700, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//a famous function that returns Object...
const fromJSON = JSON.parse('{"info": "I am a JSON"}')
console.log(fromJSON.info)