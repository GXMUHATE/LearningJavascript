const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Fiado',
        nota: 12.8
    }, {
        nome: 'Bata',
        nota: 15.0
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Wesley',
        nota: 9.4
    }, {
        nome: 'turpo',
        nota: 12.3
    }]

}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 12.8, 15 ], [ 9.4, 12.3 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)