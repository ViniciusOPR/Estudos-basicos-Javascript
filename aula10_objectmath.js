// Divisão por Zero = Atribuido como verdadeiro. Valor = Infinity
console.log(100 / 0);
console.log(!!(100 / 0));
console.log('-----------------');
let num1 = 9.47;
// Arrendondamento pra baixo
let num2 = Math.floor(num1);
console.log(num2);
// Arrendondamento pra cima
let num3 = Math.ceil(num1);
console.log(num3);
// Arrendondamento geral (automático)
let num4 = Math.round(num1);
console.log(num4);
console.log('-----------------');
// Capturando maior valor
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 0));
// Capturando menor valor
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 0));
console.log('-----------------')
// Gerando números aleátorios entre 10 e 5
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);
console.log('-----------------');
// Número PI
console.log(Math.PI);
// Potenciação
console.log(Math.pow(2, 5));