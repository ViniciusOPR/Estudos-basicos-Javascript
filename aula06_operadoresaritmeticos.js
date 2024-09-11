// Operadores Aritméticos

/*
+ -> Adição / Concatenação
- -> Subtração
* -> Multiplicação
/ -> Divisão
** -> Potenciação
% -> Resto da divisão
*/

//Adição
const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

console.log('------------------------------')

//Concatenação
const num3 = 10;
const num4 = '5';
console.log(num3 + num4)

console.log('------------------------------')

//Subtração
const num5 = 10;
const num6 = 5;
console.log(num5 - num6)

console.log('------------------------------')

//Multiplicação
const num7 = 10;
const num8 = 5;
console.log(num7 * num8)

console.log('------------------------------')

//Divisão
const num9 = 10;
const num10 = 5;
console.log(num9 / num10)

console.log('------------------------------')

//Potenciação
const num11 = 10;
const num12 = 5;
console.log(num11 ** num12)

console.log('------------------------------')

//Resto da Divisão
const num13 = 10;
const num14 = 5;
console.log(num13  % num14)

console.log('------------------------------')

//Operador de Incremento (++) - Operador de Decremento (--)
let contador = 1;
/*
contador++ //2
contador++ //3
contador++ //4
*/
console.log(contador++);
console.log(contador);

console.log('------------------------------')

console.log(++contador);
console.log(contador);

console.log('------------------------------')

// Operadores de Atribuição (=, +=, -=, *=, **=, /=)

let segundoContador = 0;
const step = 2;

segundoContador += step; // segundoContador = segundoContador + step
segundoContador += step;
console.log(segundoContador);

console.log('------------------------------')

// NaN - Not a Number
const num_normal = 10;
const palavra = 'Luiz';
console.log(num_normal * palavra);

console.log('------------------------------')

//Conversão de valores - parseInt (inteiro), parseFloat(decimais), Number
const num15 = 20;
const num16 = parseInt('30.1');
console.log(num15 + num16)

console.log('------------------------------')

const num17 = 20;
const num18 = parseFloat('30.1');
console.log(num17 + num18)

console.log('------------------------------')

const num19 = 20;
const num20 = Number('30.1');
console.log(num19 + num20)
