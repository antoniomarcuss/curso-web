const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(x in num){
    if(x == 5){
        break // break causa um desvio de fluxo para fora do laço mais proximo (for)
    }
    console.log(`${x} = ${num[x]}`)
}



for(y in num){
    if(y == 5){
        continue // interrompe a repetição e vai para a proxima repetição
    }
    console.log(`${y} = ${num[y]}`)
}

externo: for (a in num) {
    for (b in num) {
        if(a == 2 && b == 3){
            break externo
        }
        console.log(`Par = ${a},${b}`)
    }
}

console.log('Fim!')

