function Pessoa(){
    this.idade = 0
const self = this
    setInterval(function  () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000);
}
new Pessoa
//exemplos para mostrar como usar o this para diferentes casos usando bind e constante self