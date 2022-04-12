const quaseArray = {0: 'Augusto', 1: 'Laura', 2: 'Bruna'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Pedro', 'Jorge', 'Lupita']
console.log(quaseArray.toString(), meuArray)