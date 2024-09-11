/*
alert() =  o método alert() é indicado para quando é preciso informar algo à pessoa usuária, 
como avisar sobre uma falha no preenchimento de um formulário, dar boas-vindas em um novo cadastro efetuado em uma página 
e muitas outras situações.

confirm() =  Seu objetivo é permitir que a pessoa usuária da página decida se deseja ou não executar uma ação determinada.

prompt() = Seu objetivo é obter alguma informação da pessoa usuária da página.
*/


//Exercicio
const num1 = parseFloat(prompt('Digite um número: '));
const num2 = parseFloat(prompt('Digite outro número: '));

const resultado = num1 + num2;

alert(`O Resultado é ${resultado}`);