/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

let x = 'X';
let y = x; //Cópia
console.log(x, y)

let a = [1, 2, 3];
let b = [...a];

console.log(a, b);

a.push(4);
console.log(a, b);

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Rodrigues',
};

const pessoaNova = pessoa;
pessoaNova.nome = 'João';
console.log(pessoa, pessoaNova);