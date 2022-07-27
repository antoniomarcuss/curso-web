var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // a preferencia é o escopo menor que é essa aqui
}
console.log('fora =', numero )

// let so é visivil dentro da função com isso ira ficar 2 e 1. e se no lugar de var por let não ira gerar conflito e o resultado será o mesmo

/* RESUMINDO
Variaveis com Var (tem escopo global e tem escopo de função) enquanto o let tem escopo global escopo de função e escopo de bloco */