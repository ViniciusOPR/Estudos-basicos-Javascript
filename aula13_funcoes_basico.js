function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}
saudacao('Vinicius');

function despedida(nome2) {
    return `Adeus ${nome2}`;
}
console.log(despedida("Vinicius"));

function soma(x, y) {
    const resultado = x + y
    return resultado
}

console.log(soma(2, 2));
console.log(soma(3, 5));

const raiz = (n) => {
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));