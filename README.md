<h1 align="center">Projeto ViaCEP - API REST</h1>

<h2 align="center">
    API REST que realiza consulta à API ViaCEP e retorna os dados do endereço
</h2>

<br />

<div align="center">
    <img src="https://img.shields.io/github/issues/lucas95santos/viacep-api" />
    <img src="https://img.shields.io/github/forks/lucas95santos/viacep-api" />
    <img src="https://img.shields.io/github/stars/lucas95santos/viacep-api" />
</div>

<br />

<p align="center">
    <a href="#goal">Objetivo</a> •
    <a href="#technologies">Tecnologias</a> •
    <a href="#features">Features</a> •
    <a href="#features">Instruções</a> •
    <a href="#author">Autor</a>
</p>

<br />

<h2 id="goal">🎯️ Objetivo</h2>

<br />

<p>
    O objetivo dessa API é buscar o CEP informado pelo usuário e guardá-lo localmente para futuras buscas com o intuito de otimizar as requisições feitas pela aplicação web.
</p>

<br />

<h2 id="features">💻️ Features</h2>

<br />

- [x] Busca pelo CEP na API da [ViaCEP](https://viacep.com.br/)
- [x] Cache do CEP buscado em uma base de dados local

<br />

<h2 id="technologies">🛠 Tecnologias</h2>

<br />

<p>As seguintes ferramentas foram usadas no desenvolvimento do projeto:</p>

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [SQLite](https://www.sqlite.org/index.html)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/pt-BR/)

<br />

<h2 id="features">🗒️ Instruções</h2>

<br />

<h3>Para rodar o projeto siga as instruções abaixo:</h3>

**1.** Clonar esse repositório em um local de sua preferência

**2.** Instalar as depedências do projeto com o **npm** (comando `npm install`) ou com **yarn** (comando `yarn`)

**3.** Execute o comando `yarn typeorm -- migration:run` ou `npm run typeorm -- migration:run` para criar a tabela onde o CEP ficará armazenado.

**4.** Execute o comando `yarn start` ou `npm start` para subir o servidor.

**5.** Pronto. O servidor estará disponível na url **http://localhost:8080**.

<br />

<h2 id="features">🗒️ Testes</h2>

<br />

<p>Foram aplicados 7 testes nessa API, sendo 4 de unidade e 3 de integração:</p>

**Testes de unidade**

- Verificar se quando o CEP não está armazenado na base de dados a resposta é `undefined`.
- Verificar se o CEP é armazenado na base de dados.
- Verificar se quando o CEP está armazenado na base de dados a resposta contem os dados do mesmo.
- Verificar se o CEP não é armazenado mais de uma vez na base de dados.

**Testes de integração**

- Verificar se ocorre falha se o CEP não é passado na pesquisa.
- Verificar se ocorre falha se o CEP não for encontrado.
- Verificar se ocorre sucesso se CEP for encontrado.

<br />

<p align="center">
    <img src="./assets/tests/testes.png" height="250" width="400" alt="Testes" />
</p>

<br />

<h2 id="author">✏️️ Autor</h2>

<br />

<a>
    <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/39750617?s=400&u=ca61b4156710f08ee055ca45a072666166b55b39&v=4" width="100px;" alt=""/>
    <br />
    <sub><strong>Lucas Santos</strong></sub>
</a>

<br />

<p>Get in touch!</p>

[![Linkedin Badge](https://img.shields.io/badge/-Lucas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucas95santos/)](https://www.linkedin.com/in/lucas95santos/)
