//              0         1      2         4      5
let alunos = ["Luiz", "Maria", "João"]; // Luiza, Eduardo

//Adicionando valores no fim do array
alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos);
console.log(typeof alunos);
console.log(alunos instanceof Array);

//Visualizando índices do array
console.log(alunos[0]);
console.log(alunos[4]);

console.log('-------------');

let frutas = ['Banana', 'Laranja', 'Maracujá', 'Figo'];

//Alterando os valores do Array Frutas e mostrando outra forma de inserção
frutas[4] = 'Morango';
frutas[3] = 'Pera';
console.log(frutas);
console.log('-------------');
let paises = ['Brasil', 'Japão', 'EUA', 'China'];
// Mostrando a adição de valores usando o método Length através do array paises
paises[paises.length] = 'Canada';
paises[paises.length] = 'Costa Rica';
console.log(paises);
console.log('-------------');

// Adicionamos elementos no inicio do array com unshift
const novosPaises = paises.unshift("Alemanha", "Coreia do Sul");
console.log(paises);
console.log('-------------');

// Exclusão de Elementos = Pop() para excluir o último valor da lista, Delete para especificar um valor com base em seu índice e Shift() para excluir o primeiro elemento

let pratos = ["Sushi", "Feijoada", "Macarrão", "Lasanha", "Pizza", "X-Burguer", "Bolo", "Pudim"];
pratos.pop();
console.log(pratos);

delete pratos[6];
console.log(pratos)

pratos.shift();
console.log(pratos)

console.log('-------------');

//Acessando elemento inexistente
console.log(alunos[50])
// Fatiamento
console.log(alunos.slice(0, -2));