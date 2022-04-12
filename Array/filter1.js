// creating our owen filter method
Array.prototype.filter2 = function(callback){
const newArray =[]
for (let i = 0; i< this.length; i++){
    if(callback(this[i], i, this)){
        newArray.push(this[i])
    }
}
return newArray
}
const produtos = [
    {nome: 'Notebook', preco: 70000 , fragil: true},
    {nome: 'iPad Pro', preco: 65000, fragil: true},
    {nome: 'Apple Watch', preco: 45000 , fragil: true},
    {nome: 'TV Hisense', preco: 24000, fragil: false},
]

const prodCaro = product => product.preco >= 50000
const prodFragil = product => product.fragil

const prodCaroFragil = produtos.filter2(prodCaro).filter2(prodFragil)

console.log(prodCaroFragil)