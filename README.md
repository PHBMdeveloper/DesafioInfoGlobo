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
- 🐳 [Docker](https://www.docker.com/) — Ajudamos desenvolvedores e equipes de desenvolvimento a criar e enviar aplicativos.
- 🍃 [Mongodb](https://www.mongodb.com//) — O MongoDB é um banco de dados distribuído de propósito geral, baseado em documento, criado para desenvolvedores de aplicativos modernos e para a era da nuvem.

## ✋🏻 Pré-requisitos

- [Docker](https://www.docker.com/) — Ajudamos desenvolvedores e equipes de desenvolvimento a criar e enviar aplicativos.
- [Docker Compose](https://docs.docker.com/compose/install/) — Você pode executar o Compose no macOS, Windows e Linux de 64 bits.

## 🔥 Instalação e execução backend/frontend

1. Faça um clone desse repositório;
2. Entre na pasta `cd DesafioInfoGlobo`;
### **Ubuntu**
3. Rode `./begin.sh` para instalar dependencias e subir o Mongodb, Django e ReacjtJS;
### **MacOSX**
4. Rode `./begin_macos.sh` para instalar dependencias e subir o Mongodb, Django e ReacjtJS;
### **Windows 10 - Powershell**
5. Rode `./begin.ps1` para instalar dependencias e subir o Mongodb, Django e ReacjtJS;
### **Verifique se tudo esta funcionando**
6. Verifique [http://localhost:8080/](http://localhost:8080/) se a mensagem é `{"message": "ok"}` browser;
5. Verifique [http://localhost:3000/](http://localhost:3000/) se esta carrango no browser;

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
