const sequence = {
    _id: 1,
    get id(){ return this._id++ }
}

const produtos = {}

function saveProduct(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excludeProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { saveProduct, getProduto, getProdutos, excludeProduto} //to be visible outside the module