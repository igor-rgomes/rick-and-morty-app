const container = document.getElementById('card-container');

// Função principal
async function carregarPersonagens() {
  try {
    const resposta = await fetch('https://rickandmortyapi.com/api/character?page=1');
    if (!resposta.ok) throw new Error('Erro ao buscar dados da API.');

    const dados = await resposta.json();
    const personagens = dados.results;

    personagens.forEach(personagem => {
      const card = document.createElement('div');
      card.classList.add('card');

      const imagem = document.createElement('img');
      imagem.src = personagem.image;
      imagem.alt = personagem.name;

      const nome = document.createElement('h3');
      nome.textContent = personagem.name;

      const status = document.createElement('p');
      status.textContent = `Status: ${personagem.status}`;

      card.append(imagem, nome, status);
      container.appendChild(card);
    });
  } catch (erro) {
    console.error(erro);
    container.innerHTML = "<p>Erro ao carregar personagens.</p>";
  }
}

// Chamada inicial
carregarPersonagens();
