
let dobro = function (a) {
    return 2 * a
}
//metodo 2 alternativo a partir da versao de ecmascript
dobro = (a) => {
    return 2 * a
}
// ou metodo 3
dobro = a => 2 * a //return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Ola' //possui um param
console.log(ola())