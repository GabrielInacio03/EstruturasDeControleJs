//for in percorre os atributos de um objeto ou array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i in notas){
    console.log(notas[i])
    //i = indice do array notas
}

const pessoa = {
    nome: 'Ana',
    idade: 29,
    peso: 69
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}