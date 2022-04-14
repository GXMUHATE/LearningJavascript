const alunos =[
    {nome: 'suprito', nota: 12.0},
    {nome: 'heitor', nota: 15.5}
]

//imperativo - More about how it needs to be done
let total1 = 0
for (let i = 0; i< alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo - More about what needs to be done
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)