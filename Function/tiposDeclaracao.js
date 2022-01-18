console.log(soma(3, 4))

//function declaration
//we can use this function even before it is declared, because the JS runs all the functions
//at the begining and validates them.
function soma(x, y){
    return x + y
}

//function expression
const sub = function (x, y){
    return x-y
}
console.log(sub(3, 4))

//named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))