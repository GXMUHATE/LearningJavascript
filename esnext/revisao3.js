// ES8: Object.values/Object.entries
const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notacao Literal
const nome = 'Miguel'
const pessoa = {
    nome,
    ola() {
        return 'E ai galera!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Dog extends Animal{
    falar() {
        return 'Au au!'
    }
}

console.log(new Dog().falar())