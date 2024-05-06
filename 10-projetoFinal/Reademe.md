# Aplicação Node.js com Express, MySQL e EJS

Este é um guia passo a passo para criar uma aplicação Node.js usando Express, MySQL e EJS.

## Pré-requisitos

- Node.js instalado
- MySQL instalado e configurado

## Passos para a configuração

1. Clone este repositório ou baixe o código-fonte.

2. Navegue até o diretório do projeto e instale as dependências com o seguinte comando:

```bash
npm install express mysql2 sequelize ejs

```

3. Crie um banco de dados MySQL e uma tabela usando o seguinte comando SQL:

```sql
CREATE DATABASE escola;
USE escola;
CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    matricula VARCHAR(50) NOT NULL
);

```

4. Atualize o arquivo models/alunoModel.js com as informações corretas do seu banco de dados.

```bash
node app.js

```

Abra um navegador e navegue até http://localhost:3000 para ver a aplicação em ação.
Estrutura do projeto
app.js: Este é o arquivo principal que configura e inicia o servidor.
controllers/alunoController.js: Este arquivo contém a lógica do controlador para manipular as solicitações e respostas.
models/alunoModel.js: Este arquivo define o modelo de dados usando o Sequelize.
views/: Este diretório contém os arquivos de visualização EJS.
Como usar
Navegue até http://localhost:3000 para ver a lista de alunos.
Clique em "Adicionar Aluno" para adicionar um novo aluno.
Clique em "Editar" ao lado de um aluno para editar suas informações.
Clique em "Deletar" ao lado de um aluno para deletar suas informações.
Contribuindo
Contribuições são bem-vindas. Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está licenciado sob a licença MIT.
