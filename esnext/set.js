// Nao aceita repeticao/ nao indexado

const times = new Set()
times.add('Real Madri')
times.add('Inter')
times.add('Barcelona').add('Juventus').add('Corinthians')
times.add('Flamengo')
times.add('Real Madri')

console.log(times)
console.log(times.size)
console.log(times.has('Real Madri'))
console.log(times.has('real Madri'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)