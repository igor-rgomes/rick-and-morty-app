# Rick and Morty – Personagens

Aplicação front-end que consome a [Rick and Morty API](https://rickandmortyapi.com/) e exibe os personagens da série em cards gerados dinamicamente com JavaScript.

Trabalho da disciplina **Web Development Front-End** – Centro Universitário UniFECAF.

## Demonstração

- 🎬 Vídeo pitch: https://youtu.be/sdDIXy5cSOU
- 🌐 Site publicado: _adicione aqui o link do GitHub Pages_

## Tecnologias

- HTML5
- CSS3 (puro, sem frameworks)
- JavaScript (Fetch API e manipulação do DOM)

## Como funciona

1. Ao carregar a página, o `script.js` faz uma requisição `GET` para `https://rickandmortyapi.com/api/character?page=1` usando `fetch()`.
2. A resposta em JSON é convertida com `res.json()`; os personagens ficam no array `results`.
3. Para cada personagem, o JavaScript cria os elementos com `document.createElement()` (card, imagem, nome e status).
4. Os cards são inseridos na página com `append()` / `appendChild()` dentro da `<section id="card-container">`, que começa vazia no HTML.
5. Erros de requisição são tratados com `try/catch` e uma mensagem é exibida ao usuário.

## Estrutura

```
rick-and-morty-app/
├── index.html   # Estrutura da página (container vazio para os cards)
├── style.css    # Estilos e layout responsivo em grid
└── script.js    # Consumo da API e criação dinâmica dos cards
```

## Como executar

Basta abrir o arquivo `index.html` no navegador. Não é necessário instalar nada nem usar token, pois a API é pública e gratuita.

## Autor

Igor Ribeiro Gomes
