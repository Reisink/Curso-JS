const dados = require('./data/estados')

console.log('Tipo do require: ', typeof (dados))

const valores = dados().estados

// valores.forEach(element => {
//   console.log(element.sigla)  
// })

const filtrados = valores.filter(el => {
    return el.sigla.substr(0, 1) == 'A'
})

const ordernarZA = valores.sort((elA, elB) => {
    return (elA.sigla.substr(0, 1) > elB.sigla.substr(0, 1) ? -1 : 1)
})

const TESTAR = valores.shift()
console.log(TESTAR)
console.log(valores.includes(TESTAR))

// console.log(ordernarZA)