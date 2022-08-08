console.log(soma(3,2))
// Function declaration
function soma(x, y) { // a diferença é que na fucntion sem variavel eu posso chamar a função antes com o console.log e na com variavel não. 
    return x + y
}
// Function expression
const sub = function(x, y){
    return x - y
}

// name Function expression 
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3,4))
console.log(sub(5,3))
