Array.prototype.forEach2 = function(callback){
    for (let i =0; i< this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Hugo', 'jorge', 'Lola', 'Shany']

//the callback function of foreach can receive 3 parameters, the object, index and array
aprovados.forEach2(function(nome, indice){// index is always passed as the second parameter, not the first
    console.log(`${indice + 1}) ${nome}`)
})