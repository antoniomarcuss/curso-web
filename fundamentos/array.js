const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4]) // quando vc retornar um valor que n existe ele vai retorar underfinit
valores[4] = 10
console.log(valores)
console.log(valores.length) // tamanho do array (qtd)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // exclui o ultimo valor
delete valores[0] // usa-se para exluir um determinado indice
console.log(valores)
console.log(typeof valores) // tipo de dado (object)