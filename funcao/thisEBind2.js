function pessoa() {
    this.idade = 0
    const self = this
    setInterval(function() { // ela dispara uma outra função apartir de um determinao intervalo que vc passou
        self.idade++
        console.log(self.idade)
    }, 1000)
}
new pessoa