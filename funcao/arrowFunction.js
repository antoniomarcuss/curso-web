const dobro = function (a) {
    return 2 * a
}
console.log(dobro(2))

const dobro2 = (a) => {
    return 2 * a
}
console.log(dobro2(3))

const dobro3 = a => a // return implícito
console.log(dobro(4))

let ola = function (){
    return 'olá'
}
console.log(ola())

ola = () => 'ola'
ola = _ => 'olá'
console.log(ola())