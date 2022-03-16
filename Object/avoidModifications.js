//Object.preventExtensions
//you can alter and delete but cannot add new attributes
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.23, tag: 'valido'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Lapis'
produto.descricao = 'Lapis de desenho livre'
delete produto.tag
console.log(produto)

//Object.seal
//you cannot ad not even delete the atributes, but only alter it
const pessoa = {nome: 'Sapo', idade: 35}
Object.seal(pessoa)

console.log('Sealed: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Dope'
delete pessoa.nome
pessoa.idade = 27
console.log(pessoa)

//Object.freeze = sealed + constant values