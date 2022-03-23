const obj = {a: 1, b: 2, c: 3, soma(){ return a+ b + c}}

console.log(JSON.stringify(obj))// transformando um objecto em formato string Json

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // transformando formato string json para objecto
console.log(JSON.parse('{"a":1, "b": "string", "c": true, "d": {}, "e": []}'))

// usefull links
//jsonlint.com