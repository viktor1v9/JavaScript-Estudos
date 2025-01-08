const nome = 'Anakin'
const concatenacao = 'Olá ' + nome + "!";
const template = `
olá 
${nome}!`
console.log(concatenacao);
console.log(template);

// expressões

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase();
console.log(`ei....  ${up('cuidado')}`);