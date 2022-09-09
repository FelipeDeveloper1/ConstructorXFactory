// usando arrow function pois o this nao ira variar
gerarCarro = (nome = 'sem nome') => {
    let carro = {}
    carro.nome = nome
    return carro
}
let ferrari = gerarCarro('ferrari')
let uno = gerarCarro('uno')
console.log(ferrari.nome)
console.log(uno)