function imprimirResultado(nota){
    switch (Math.floor(nota)) {
        case 9: case 10:
            console.log('Quadro de Honra') 
            break // ele influencia no swite no for e while . o continue funciona dentro do laço for e while
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')

    }
}
imprimirResultado(11)