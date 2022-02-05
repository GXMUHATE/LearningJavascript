const ferrari = {
    modelo: 'F320',
    veloMaxima: 365
}

const volvo ={
    modelo: 'SC60',
    valoMaxima: 260
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjecto(){}

console.log(typeof Object, typeof meuObjecto)
console.log(Object.prototype, meuObjecto.prototype)