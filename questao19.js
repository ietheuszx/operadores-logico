/*
Como você pode verificar se um número é ímpar ou menor que 50 em 
JavaScript usando operadores lógicos
*/

function imparOuMenorQue50(numero) {
    return numero % 2 !== 0 || numero < 50;
}

// Exemplo de uso:
console.log(imparOuMenorQue50(30));   // false
console.log(imparOuMenorQue50(45));   // true
console.log(imparOuMenorQue50(50));   // false
console.log(imparOuMenorQue50(55));   // true
