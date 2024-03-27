/*
Como você pode verificar se um número é múltiplo de 3 ou 5 em 
JavaScript usando operadores lógicos?
*/

function multiplo(numero) {
    return numero % 3 === 0 || numero % 5 === 0;
}

// Exemplo de uso:
console.log(multiplo(9));   // true (múltiplo de 3)
console.log(multiplo(10));  // true (múltiplo de 5)
console.log(multiplo(15));  // true (múltiplo de ambos)
console.log(multiplo(7));   // false (não é múltiplo de 3 nem de 5)