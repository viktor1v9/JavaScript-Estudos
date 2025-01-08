// par nome/valor
const saudacao = 'koe' // contexto léxico 1

function exec(){
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 80.90,
    endereco: {
        logradouro: 'rua 23',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);