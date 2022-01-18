function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
}

console.log(criarProduto('Macbook', 1800.59))
console.log(criarProduto('iphone', 899.80))