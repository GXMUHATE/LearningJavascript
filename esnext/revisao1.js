// Difference between let and const
{
    var a = 2 // global scope
    let b = 3 // bloc scope
    console.log(b)
}

console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Codificando"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Pedro', idade: 23}
console.log(i, nome)