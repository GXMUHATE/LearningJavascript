console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Escola de Computacao'.reverse())

//ading a method to Array
Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//dont do this at home, not a good idea, changing the existing functions
String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Escola de computacao'.reverse()) // It will not work because we changed a predefined method

