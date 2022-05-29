// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de funcao

// usar spread com objecto
const funcionario = {nome: 'Joao', salario: 123000.89}
const clone = {activo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafael']
console.log(grupoFinal)