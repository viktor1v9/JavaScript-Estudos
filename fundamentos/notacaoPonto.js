console.log(Math.ceil(6.9));

const obj1 = {};
obj1.nome = 'anakin';
//obj1 ['nome'] = 'padmé';

console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome;
    this.forca = function(){
        console.log(this.nome + ' A força está com você');
    }
}

const obj2 = new Obj('Vader');
const obj3 = new Obj('Obi wan');

console.log(obj2.nome);
console.log(obj3.nome);
obj2.forca();
obj3.forca();