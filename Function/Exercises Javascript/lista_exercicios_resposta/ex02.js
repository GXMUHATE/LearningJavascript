function triangulos(lado1, lado2, lado3){
    if((lado1 + lado2 < lado3) || (lado2 + lado3 < lado1) || (lado1 + lado3 < lado2)){
        console.log("Os lados do tringulo sao invalidos")
    }else if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(triangulos(2,7,1))