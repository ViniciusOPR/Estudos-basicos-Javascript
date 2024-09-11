function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //console.log(nome.value, sobrenome.value, peso.value, altura.value);

        const pessoa = {
            nomePessoa: nome.value,
            sobrenomePessoa: sobrenome.value,
            pesoPessoa: peso.value,
            alturaPessoa: altura.value,
        }

        pessoas.push(pessoa);
        console.log(pessoas);
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}.</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
    
}
meuEscopo();

// Uma outra forma seria criar o object dentro do próprio push.