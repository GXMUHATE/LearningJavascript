function formulaBhaskara(a, b, c){
//calculo de Delta
delta = b**2 - (4*a*c)
if (delta < 0){
    console.log("Delta é negativo")
}
    let x1 = (-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b - Math.sqrt(delta))/(2*a)
    let raizes = [x1, x2]
    raizes.forEach(function(item, indice, array){
        console.log(`O valor de X${indice+1}:, ${item}`)
    })
}


formulaBhaskara(1,12,-13)
