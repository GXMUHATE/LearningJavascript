const alunos = [
    {nome: 'Hugo', nota: 12.5, bolsista: false},
    {nome: 'Nuno', nota: 14.5, bolsista: true},
    {nome: 'Guberta', nota: 11.5, bolsista: false},
    {nome: 'Larissa', nota: 17.5, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)