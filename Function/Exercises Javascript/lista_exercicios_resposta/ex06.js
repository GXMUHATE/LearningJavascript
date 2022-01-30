/*O montante do juro simples e dado pela expressão: M = C + J
Fórmula para o cálculo de juros simples: J = C * i * t , em que:
J = juros
C = capital
i = taxa
t = tempo (período de aplicação)
M = montante*/
function depositoPrazoSimples(capital, juros, tempo){
let J = juros/100
    JurosT = capital * J * tempo
    M = capital + JurosT
    montante = `Mt$ ${M.toFixed(2).toString().replace(".", ",")}`
    console.log(montante)
}

/*Fórmula para o cálculo de juros compostos M = C*(1 + i)t , onde: 

M = montante 
C = capital 
i = taxa 
t = tempo */

function depositoPrazoComposto(capital, juros, tempo){
    let J = juros/100
        M = capital * (1 + J) ** tempo
        montante = `Mt$ ${M.toFixed(2).toString().replace(".", ",")}`
        console.log(montante)
    }

depositoPrazoSimples(20000, 3.5, 3)
depositoPrazoComposto(2000, 2, 12)