const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(1, 2);
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total/(peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2)); // converter para binários
console.log(typeof media);
console.log(typeof Number);
console.log((10).toString(2));
 
// ALGUNS CUIDADOS
console.log(7/0); // Infinity
console.log("10"/2); // dependendo, pode ser divido um número dentro de uma string. com exceção de números com vírgulas
console.log('show' * 2); //error NAN(not a number)
console.log(0.1 + 0.7); // imprecisão
console.log('2' + 2); // contatenação
console.log('2' - 2); // subtração

