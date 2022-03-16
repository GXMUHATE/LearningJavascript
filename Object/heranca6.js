function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 463)
console.log(aula1, aula2)

//simulating the new operator
function novo(f, ...params){
    const obj = {} //literal notation of an object
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo aula3', 143)
const aula4 = novo(Aula, 'Ate Breve chefe', 876)
console.log(aula3, aula4)