const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

//if you want to create new instances, you must use a factory for that
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)