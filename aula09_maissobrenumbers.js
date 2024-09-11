// IEEE 754-2008
let num1 = 0.7; //number
let num2 = 0.1; //number

// Medidas para evitar / contornar imprecisões no cálculo

num1 = ((num1 * 100) + (num2 * 100) ) / 100; //0.8
num1 = ((num1 * 100) + (num2 * 100) ) / 100; //0.9
num1 = ((num1 * 100) + (num2 * 100) ) / 100; //1.0

console.log(num1);
console.log(Number.isInteger(num1));
console.log('------------------------');
// Outra forma

let num3 = 0.5;
let num4 = 0.5;

num3 += num4; //1.0

num3 = Number(num3.toFixed(2));
console.log(num3);
console.log(Number.isInteger(num1));

console.log('------------------------');

let num6 = 10;
let num7 = 0.2;

// Concatenação
console.log(num6.toString() + num7);
//num6 = num6.toString();

// Verificar o num6 em Binário
console.log(num6.toString(2));

// Arrendondar casas decimais
console.log(num6.toFixed(2));

// Verifica se é um número inteiro
console.log(Number.isInteger(num6));

let temp = num6 * 'ola'
console.log(temp);

// Verifica se é NaN
console.log(Number.isNaN(temp));