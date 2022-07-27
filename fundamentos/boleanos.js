let valor = true
// para saber o valor normal basta usar !! 
console.log('Os Verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!! (valor = true))

console.log('Os Falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!! (valor = false))

let nome = 'marcus'
console.log('' || 'desconhecido') // falso

nome = 'marcus'
console.log(nome || 'desconhecido') // true
