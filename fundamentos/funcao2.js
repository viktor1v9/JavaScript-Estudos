// Armazenando uma função dentro de uma variável
const imprimirSoma = function(a, b){
    let soma = a + b;
    console.log(soma);
}
 imprimirSoma(2, 3);

 // Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    let soma = a + b;
    return soma;
}

console.log(soma(2, 3));

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 1));

const imprimir2 = a => console.log(a);
imprimir2('teste');