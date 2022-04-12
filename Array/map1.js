//with Map we have a new array with a modification of its contents but with same size
const nums =[1, 2, 3, 4, 5]

//for with a purpose
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const forMoney = e => `Mtn$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(forMoney)
console.log(resultado)