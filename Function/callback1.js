//calback is passing a function to a method, and that function will 
//be called when an event occurs

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

//here the event is a loop, that trigger the function when it finds a new element
fabricantes.forEach(imprimir)
//or we can use onother way o having similar result
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})