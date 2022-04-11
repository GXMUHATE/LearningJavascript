const pilotos = ['Vettel', 'Alonso', 'Raikonnen', 'Hamilton']
pilotos.pop() //removes the last member of the array
console.log(pilotos)

pilotos.push('Verstappen') // adds to the last position of the array
console.log(pilotos)

pilotos.shift() // removes the first member of the array
console.log(pilotos)

pilotos.unshift('Shumaikel') //add to the first position
console.log(pilotos)

//splice can add and remove elements

//adding
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)
//removing
pilotos.splice(3, 1)
console.log(pilotos)

//slice returns a new array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)