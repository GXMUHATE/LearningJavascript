// Cadeia de protótipos (prototype chain)
//we use __proto__ to define inheritance 
Object.prototype.attr0 ='0' // dont use this at home
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velActual : 0,
    velMax : 250,

    acelerarMais(delta){
        if(this.velActual + delta <= this.velMax){
            this.velActual += delta 
        }else{
            this.velActual = this.velMax
        }
    },
    status(){
        return `${this.velActual} Km/h de ${this.velMax}Km/h`
    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //setting the relation between objects
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())