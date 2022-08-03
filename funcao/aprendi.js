function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(20, 50)

// função com returno

function soma(a, b = 1){
    return a + b // está retornando um valor por isso console.log(soma(2,3))
}
console.log(soma(2,3))

const soma2 = function(a, b){ // armazenando  dentro de uma variavel
    console.log(a + b)
}
soma2(2, 5)

const soma3 = (a, b) => {
    return a + b
}
console.log(soma(5, 5))

const sub = (a, b) => a - b // forma reduzida
console.log(sub(5, 4))

// usando objeto

const loja = {}
loja.funcionario = 10
loja.produto = 50
loja.nome = 'Santorine'
console.log(loja)


const cliente = {
    nome: 'Marcus',
    idade : 24,
    peso : '70',
    endereco: {
        logradouro : 'Vila 1746',
        numero : 06
    }
}
console.log(cliente)

function maiorq20(a, b) {
    const soma = a + b
    if(soma > 20){
        console.log(`${soma} é maior que 20`)
    }else{
        console.log(`${soma} não é maior que 20`)
    }

}
maiorq20(20, 5)
