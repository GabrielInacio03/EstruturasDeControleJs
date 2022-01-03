Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
    if(nota.entre(9,10)) {   
        console.log('Quadro de Honra')
    } else if(nota.entre(6, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(3, 5.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 2.99)) {
        console.log('Reprovado')
    } else {
        console.log('Inválido')
    }

    console.log('FIM')
}
imprimirResultado(7.8)
imprimirResultado(9)
imprimirResultado(4)
imprimirResultado(2.2)
imprimirResultado(20)