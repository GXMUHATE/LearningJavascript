let comparaComThis = function (param){
    console.log(this === param)
}
//for node the global object is "global", for browser is window
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//for this case the "this" is pointing to the same this in the scope of the module
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

//if we try to change the behavior of the function declared with arrow function, using bind 
//to point to the object it will not change, it will remain the same behavior original to Arrow function
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)