function area (altura, largura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido = ${area}m²`)
    }else {
        return area
    }
}
console.log(area(2,2))
console.log(area(5,5))

//A grande diferença entre a função com retorno e a função sem retorno, é que na função com retorno o console.log precisa ser executado fora da função, diretamente na chamada dela. Já na função sem retorno o console.log é executado dentro da função.