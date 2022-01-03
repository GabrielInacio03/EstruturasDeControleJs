const imprimirResultado = function (nota){
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log(nota)
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
        case 6:
            console.log(nota)
            console.log('Aprovado')
            break
        case 5:
        case 4:
        case 3:
            console.log(nota)
            console.log('Recuperação')
            break
        case 2:
        case 1:
        case 0:
            console.log(nota)
            console.log('Reprovado')
            break
        default:
            console.log(nota)
            console.log('Inválido')
        
    }
}

imprimirResultado(9.5)
imprimirResultado(7)
imprimirResultado(4.9)
imprimirResultado(1.1)
imprimirResultado(-1)

//sintaxe não suportada
/**
 * case 3,2,1:
 */