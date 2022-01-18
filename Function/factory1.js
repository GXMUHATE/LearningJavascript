//factory function is a function that returns an object
//it can be used to create a template of an object that you would like to use many times

//Simple Factory
function criarPessoa(){
    return{
        nome: 'Paulo',
        sobrenome: 'Mungoi'
    }
}

console.log(criarPessoa())