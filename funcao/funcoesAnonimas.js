const soma = function (x, y){
    return x + y
}
const resultado = function (a , b, operacao = soma) {
    console.log(operacao(a,b))
}
resultado(3, 4)
resultado(3, 4, soma) // Posso chamar explicitamente
resultado(3, 4, function (x, y){
    return x - y // posso criar uma função arrow
})
resultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}
pessoa.falar()