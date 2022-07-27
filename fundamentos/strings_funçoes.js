const escola = 'cod3r'
console.log(escola.charAt(4)) // vai dar a letra que está no indice 4 da string (r)
console.log(escola.indexOf('3')) // saber se aquele indece está dentro da palavra (3)
console.log(escola.substring(1)) // ele vai apartir do indice 1 até o final ( od3r)
console.log(escola.substring(0,3)) // ela vai do indice 0 até o indice 3 sem incluir o indice 3
console.log(escola.replace(3,'e')) // substituir a letra por outra (coder)
console.log('ana,maria,jose'.split(','))// chamar a função split converte as strings em array e faz um separador utilizando (',') ou ('/n')

const up = texto => texto.toUpperCase() // função para por letras MAIÚSCULAS 
console.log(`Ei ..... ${up('cuidadoo')}!`) // dentro do templeit string posso também chamar uma função


