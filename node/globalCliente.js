require('./global')

console.log(MyApp.saudacao())

//por ser global pode ser modificado, only if we put as freeze
MyApp.nome = 'Bla bla!'
console.log(MyApp.nome)