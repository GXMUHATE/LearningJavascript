function metical(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `Mt$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 34.9
const precoParcelado = 12
console.log(metical `1x de ${preco} ou 3x de ${precoParcelado}.`)