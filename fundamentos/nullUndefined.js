let valor;
console.log(valor);

valor = null; // ausência de valor
console.log(valor);
//console.log(valor.toString()); // Acessar algo que está nulo causar um error

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // EVITE atribuir undefined, use null ou 0;
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);




