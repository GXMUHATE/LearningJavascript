class Pessoa {
    constructor(nome){
        this.nome = nome //we use this to make it public
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Muhate')
p1.falar()

//there is a diference when we run the same code using Class and using Factory function on Browser

//the lexic context when we use Factory function is more deterministic, because it
//refers to the scope of the function where the constructor was declared

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Graçane')
p2.falar()