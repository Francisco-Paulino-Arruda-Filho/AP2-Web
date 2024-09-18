# CRUD de Alunos - Segunda Prova

Este projeto implementa uma aplicação CRUD (Create, Read, Update, Delete) para gerenciar informações sobre alunos, desenvolvido como parte da segunda prova de Engenharia de Software. A aplicação é construída utilizando **React** no front-end e **Express** no back-end, com uma base de dados em **MongoDB**, **memória**, ou **Firebase Firestore**.

## Tecnologias Utilizadas

- **Front-End**: Vite + React + Bootstrap + TS
- **Back-End**: Node.js com Express
- **Banco de Dados**: MongoDB

## Funcionalidades

A aplicação permite realizar as seguintes operações sobre a entidade "ALUNO":

- **Listar Alunos**: Exibe uma lista de alunos cadastrados, mostrando seus nomes, cursos e IRA.
- **Criar Aluno**: Formulário para adicionar um novo aluno ao sistema.
- **Editar Aluno**: Possibilidade de editar os dados de um aluno existente.
- **Recuperar Aluno**: Exibe detalhes específicos de um aluno com base em seu ID.
- **Apagar Aluno**: Remove um aluno da base de dados.

## Estrutura da Entidade "ALUNO"

Cada aluno possui os seguintes atributos:

- **nome** (string): Nome completo do aluno.
- **curso** (string): Curso em que o aluno está matriculado.
- **IRA** (number): Índice de Rendimento Acadêmico.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- MongoDB, Firestore ou configuração de base de dados em memória

### Instruções

1. Clone o repositório:

    ```bash
    git clone https://github.com/Francisco-Paulino-Arruda-Filho/AP2-Web
    ```

2. Instale as dependências:

    ```bash
    cd AP2-Web
    npm install
    ```
3. Rode o docker
    ```
        docker compose up
    ```
4. Zere o docker
    ```
        docker compose down
    ```
OBS: Se quiser deletar as imagens
    ```
        docker compose down --msi local
    ```

5. Rode a aplicação:

    ```bash
    npm run dev
    ```
6. Acesse a aplicação em `http://localhost:5173`.

## Menu de Navegação

A aplicação contém um menu dropdown que facilita o acesso às operações de CRUD:

- **Listar Alunos**
- **Criar Aluno**
- **Editar Aluno**
- **Apagar Aluno**
