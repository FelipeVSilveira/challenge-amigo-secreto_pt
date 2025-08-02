//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";

    // Atualiza a lista na tela
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    // Obter o elemento da lista
    const lista = document.getElementById('listaAmigos');
    // Limpar a lista existente
    lista.innerHTML = "";

    // Percorrer o array e adicionar elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const nomeSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${nomeSorteado} foi sorteado!</li>`;
}