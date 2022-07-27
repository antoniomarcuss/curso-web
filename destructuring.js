// novo recurso do E22015
const pessoa = {
    nome : 'Ana',
    idade : 5,
    endereco: {
        logradouro : 'Rua ABC',
        numero : 1000
    }
}
// usando destructuring.js

const {nome , idade} = pessoa
console.log(nome,idade)
// usando com variavel 
const {nome : n, idade: i} = pessoa
console.log(n,i)

const {endereco: {logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)
