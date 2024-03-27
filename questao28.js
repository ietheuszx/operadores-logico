/*
Como você pode verificar se uma pessoa é adolescente (idade entre 13 
e 19 anos) em JavaScript usando operadores lógicos?   
*/

    function aborrescente(idade) {
        return idade >= 13 && idade <= 19;
    }
    
    
    console.log(aborrescente(15));  // true
    console.log(aborrescente(20));  // false
    console.log(aborrescente(12));  // false
    