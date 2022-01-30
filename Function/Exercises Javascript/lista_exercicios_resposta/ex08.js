// n jogos
// regista pontuacoes de cada jogo, e verifica se é 
//maior ou menor que seu melhor e pior desempenho
let jogos = []
let resultado = []
var recorde =0
var pior =0
let piorVal =0
function jogador(jogos){
    for (var i = 0; i < jogos.length; i++){
        if (jogos[i+1] > jogos[i]){
        recorde += 1  
    }
    if (jogos[i] <= pior){
        pior = jogos[i]
    }
    
    piorVal = jogos.toString().indexOf(pior)
}

    //pior =  Math.max(...jogos)
    resultado.push(recorde)
    resultado.push(piorVal)
    return resultado
}


console.log(jogador([10, 20, 20, 8, 25, 3, 0, 30, 1]))