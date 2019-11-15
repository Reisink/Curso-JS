const carrinho = [
    '{ "nome" : "Borracha", "preco" : 3.45 }',
    '{ "nome" : "Carderno", "preco" : 13.90 }',
    '{ "nome" : "Kit Lapis", "preco" : 41.22 }',
]


let precos = carrinho.map(a => JSON.parse(a).preco)
console.log(precos)

const paraObj = json => JSON.parse(json)
const pegarPreco = produto => produto.preco
let precos2 = carrinho.map(paraObj).map(pegarPreco)
console.log(precos2)

const carrinhoObj = [
    { nome: 'Borracha', preco: 5.0 },
    { nome: 'Carderno', preco: 3.0 }
]

let preco3 = carrinhoObj.map(el => el.preco * 5)
console.log(preco3)