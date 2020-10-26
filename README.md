<h1 align="center">
  CRUD News
</h1>

Criar um CRUD de notícias, usando React, com os seguintes campos:

- Título
- Conteúdo
- Data de Publicação

## 👨🏼‍💻 Desenvolvedor

- [Paulo Henrique Bernardes Martins](http://phdeveloper.com.br/)

## 🚀 Tecnologias

- 💾 [ReactJS](https://pt-br.reactjs.org/) — Uma biblioteca JavaScript para criar interfaces de usuário.
- ⚡ [NodeJS](https://nodejs.org/en/) — O Node.js® é um mecanismo para execução JavaScript independente usando JavaScript V8 do Chrome.
- 💾 [Django REST framework](https://www.django-rest-framework.org/) — APIs da Web kit ferramentas para Python.
- ⚡ [Django](https://www.djangoproject.com/) — Um framework web para Python.
- 🐳 [Docker](https://www.docker.com/) — Uma Ajudamos desenvolvedores e equipes de desenvolvimento a criar e enviar aplicativos.
- 🍃 [Mongodb](https://www.mongodb.com//) — O MongoDB é um banco de dados distribuído de propósito geral, baseado em documento, criado para desenvolvedores de aplicativos modernos e para a era da nuvem.

## ✋🏻 Pré-requisitos

- [Docker](https://www.docker.com/) — Uma Ajudamos desenvolvedores e equipes de desenvolvimento a criar e enviar aplicativos.

## 🔥 Instalação e execução backend

1. Faça um clone desse repositório;
2. Entre na pasta `cd DesafioInfoGlobo/backend/`;
3. Rode `./begin.sh` para instalar dependencias e subir o mongodb e django;
4. Verifique [http://localhost:8080/](http://localhost:8080/) se a mensagem é `{"message": "ok"}` browser;

## 🔥 Instalação e execução frontend

1. Faça um clone desse repositório;
3. Rode `cd ..` para voltar a pasta raiz do projeto;
2. Entre na pasta `cd frontend/`;
3. Rode `npm install` para instalar dependencias;
3. Rode `npm start` para iniciar o projeto ReactJS;
4. Verifique [http://localhost:3000/](http://localhost:3000/) se esta carregando no browser.

## 📚 Implementação

O projeto DesafioInfoGlobo esta dividio em duas partes:

`Pasta => DesafioInfoGlobo`
- `Pasta => backend`
- `Pasta => frontend`

Na pasta backend, temos os modulos python dividido em core e news:

`Pasta => DesafioInfoGlobo => backend `
- `Pasta => core` (Configuração básica para Django)
- `Pasta => news` (App Django com seus models, views e etc...)

Na pasta `Pasta => frontend` encontramos os arquivos do ReactJS organizado:

`Pasta => frontend => src`
- `components` (Componentes utilizados)
- `pages` (Paginas para adicionar, deletar, editar, lista os publicados e atualizar)
- `services` (Chamada para o backend com axios)
- `...`

---
