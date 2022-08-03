const pessoa = {
    saudacao : 'Bom Dia',
    falar(){ // criei uma funcao no objeto
        console.log(this.saudacao) // chamei o objeto pessoa usando (this)
    }
}
pessoa.falar()


const falarDePessoa = pessoa.falar.bind(pessoa)// usando bind
falarDePessoa()