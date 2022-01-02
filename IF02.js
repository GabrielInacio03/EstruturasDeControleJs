//javascript não é baseado em identaçao como é o caso do python
function teste1(num){
    if(num > 7)
        console.log(num) //primeira sentença
    
    console.log('Final') //segunda sentença
}

//teste1(6)
//teste1(8)

function teste2(num){
    if(num > 7); //sentenca de codigo vazio
    
    {
        console.log(num)
    }
}
teste2(6)
teste2(8)