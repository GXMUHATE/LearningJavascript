const aprovados = ['Hugo', 'jorge', 'Lola', 'Shany']
//the callback function of foreach can receive 3 parameters, the object, index and array
aprovados.forEach(function(nome, indice){// index is always passed as the second parameter, not the first
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)