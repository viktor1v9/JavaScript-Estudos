const prod1 = {}; // '{}' representa objetos
prod1.nome = 'celular ultra mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.4; // Evitar atributos com espaços

console.log(prod1);

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90,
    preco2: 8.90,
    obj:{
        nome: 'teste',
        obj:{
            nome: 'teste'
        }
    }
}
prod2['Desconto Legal'] = 0.4; 
console.log(prod2);