// Novo recurso do ES2015

const pessoa = {
    nome: 'Muhate',
    idade: 5,
    endereco: {
        logradouro: 'Rua Zimpeto',
        numero: 107
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, benHumorada = true} = pessoa
console.log(sobrenome, benHumorada)

const{endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)