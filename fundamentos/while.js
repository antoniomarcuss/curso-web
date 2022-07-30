function numAleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
while(opcao != -1 ) {
    opcao = numAleatorio(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Até a próxima')

// exemplo de while com limites de valores

let contador = 1
while(contador <=10) {
    console.log(`contador ${contador}`)
    contador++
}