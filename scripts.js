const cadastroApiUrl = 'http://localhost:8080';

function cadastrar(){
    const inputs = document.querySelectorAll('input');
    const data = {};

    for(let input of inputs){
        data[input.name] = input.value;
    }

    fetch(cadastroApiUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => mostrarResposta('Cadastro finalizado com sucesso.'))
    .catch(() => mostrarResposta('Um erro ocorreu. Tente novamente.'));
}

function mostrarResposta(mensagem){
    document.querySelector('form').innerHTML = mensagem;
}

document.querySelector('form button').onclick = cadastrar;