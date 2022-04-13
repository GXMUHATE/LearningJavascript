const alunos = [
    {nome: 'Hugo', nota: 12.5, bolsista: false},
    {nome: 'Nuno', nota: 14.5, bolsista: true},
    {nome: 'Guberta', nota: 11.5, bolsista: false},
    {nome: 'Larissa', nota: 17.5, bolsista: true},
]

//Desafio 1: Todos os alunos sao bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))