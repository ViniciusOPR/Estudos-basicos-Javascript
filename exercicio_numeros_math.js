const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const raizQuadrada = document.getElementById('texto_raiz_quadrada');
const verificacaoInteiro = document.getElementById('verificacao_inteiro');
const verificacaoNan = document.getElementById('verificacao_nan');
const arrendondamentoBaixo = document.getElementById('arrendondamento_baixo');
const arrendondamentoAlto = document.getElementById('arrendondamento_alto');
const duasCasas = document.getElementById('duas_casas');

numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML = `<p>Raiz Quadrada: ${Math.sqrt(numero)}.</p>`;
verificacaoInteiro.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
verificacaoNan.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
arrendondamentoBaixo.innerHTML = `<p>Arrendondando para baixo: ${Math.floor(numero)}.</p>`;
arrendondamentoAlto.innerHTML = `<p>Arrendondando para cima: ${Math.ceil(numero)}.</p>`;
duasCasas.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;


// Uma outra forma de resolver o problema seria usar o "+=" ao invés de criar várias variáveis.