function Pessoa (nome){
        this.nome = nome //we use this to make it public
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Muhate')
p1.falar()