//filter is used to create a new array based on a condition
const produtos = [
    {nome: 'Notebook', preco: 70000 , fragil: true},
    {nome: 'iPad Pro', preco: 65000, fragil: true},
    {nome: 'Apple Watch', preco: 45000 , fragil: true},
    {nome: 'TV Hisense', preco: 24000, fragil: false},
]

console.log(produtos.filter(function(p){
    return p.preco > 50000
}))

const prodCaro = product => product.preco > 50000
const prodFragil = product => product.fragil

const prodCaroFragil = produtos.filter(prodCaro).filter(prodFragil)

console.log(prodCaroFragil)