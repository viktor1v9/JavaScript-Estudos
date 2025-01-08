// Função sem retorno
function imprimirSoma(a, b){
    let c = a + b
    console.log(c);

}
imprimirSoma(2, 2);
imprimirSoma(2);
imprimirSoma(2, 10, 3, 5, 6, 9); // só vai pegar os dois primeiros números
imprimirSoma();


// Função com retorno

function soma(a, b = 0){
 return a + b;
}

console.log(soma(2, 3))
console.log(soma())