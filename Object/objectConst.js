//explaining how an object stored in a constant can be manipulated
//pessoa -> 123 -> {...}
const pessoa = {nome: 'Litos'}
pessoa.nome = 'Lopes'
console.log(pessoa)

//pessoa -> 345 -> {...}
// pessoa = {nome: 'Grupelo'}

Object.freeze(pessoa)
// when we freeze an Object, everything after that doesnt work
pessoa.nome = 'Joao'
pessoa.end = 'Rua der'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstant = Object.freeze({nome: 'Sergio'})
pessoaConstant.nome = 'Testou'
console.log(pessoaConstant)