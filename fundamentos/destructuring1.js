const pessoa = {
    nome: 'Ana',
    idade: 19,
    endereco:{
        logradouro: 'rua 123',
        numero: 123
    }
}

const {nome, idade} = pessoa; // tirando o atributo nome e idade de dentro do objeto pessoa
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);
console.log(nome, idade);

const {sobrenome, bemHumorada ='não existe'} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);

const {conta: {agencia, num}} = pessoa;
console.log(agencia, num);