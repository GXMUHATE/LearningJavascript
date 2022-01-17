function Carro(velocidadeMaxima = 200, delta = 5){
    //private attribute
    let velocidadeActual = 0

    //public method
    this.acelerar = function (){
        if(velocidadeActual + delta <= velocidadeMaxima){
            velocidadeActual += delta
        }else{
            velocidadeActual = velocidadeMaxima
        }
    }

    //public method
    this.getVelocidadeActual = function (){
        return velocidadeActual
    }
}

const BMW = new Carro
BMW.acelerar()
console.log(BMW.getVelocidadeActual())

const ferrari = new Carro(380, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeActual())