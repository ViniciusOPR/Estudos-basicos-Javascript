/* Vinicius Ouro Preto tem 21 Anos, pesa 77 kg
tem 1.8 de altura e seu IMC é de ""
Vinicius Ouro Preto Ribeiro nasceu em 2003 */

const nome = 'Vinicius Ouro Preto';
const sobrenome = 'Ribeiro';
const idade = 21;
const peso = 77;
const alturaEmM = 1.80;
let anoAtual = 2024;
let imc; // peso / (altura * altura)
let anoNasc; // ano atual - idade

imc = peso / (alturaEmM * alturaEmM);
anoNasc = anoAtual - idade;

console.log(nome, "tem", idade, "anos, pesa", peso, 'KG');
console.log("Tem", alturaEmM, "de altura e seu IMC é de", imc);
console.log(nome, sobrenome, "nasceu em", anoNasc);

// Template Strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNasc}`);