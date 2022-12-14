// Criar de forma literal
function fun1() { }

//Armazenar em uma variável 
const fun2 = function (){ } // função anônima

// Armazenar em um Array 
const array = [function(a,b){return a + b}, fun1,fun2]

console.log(array[0](2,3))
// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function() {return 'opa'}
console.log(obj.falar())
// Passar funçao com parâmetro

function rum(fun) {
    fun()
}
rum(function () { console.log('Executando...')}) 

// Uma função pode retornar/conter uma função
function soma (a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)