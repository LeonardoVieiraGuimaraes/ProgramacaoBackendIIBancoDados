# Projeto Escola: Criação de um Servidor HTTP Simples com Node.js e Express

Este repositório contém o código para um servidor HTTP simples criado com Node.js e Express. O servidor responde com "Olá, mundo!" para todas as requisições e está configurado para escutar na porta 3000.

## Configuração do Ambiente

1. Crie uma pasta no seu desktop chamada "Projeto-Escola".
2. Abra a pasta "Projeto-Escola" no Visual Studio Code. Você pode fazer isso clicando com o botão direito do mouse na pasta e selecionando "Abrir com Code". Alternativamente, você pode abrir o Visual Studio Code e arrastar a pasta para dentro dele.

## Criação do Arquivo Principal

3. Dentro da pasta "Projeto-Escola", crie um novo arquivo chamado "app.js". Este arquivo será o ponto de entrada para a nossa aplicação.

## Criação de um Servidor HTTP Simples

4. No arquivo "app.js", vamos criar um servidor HTTP simples. Para isso, vamos usar o módulo `http` do Node.js. Aqui está um exemplo de como você pode fazer isso:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Olá, mundo!');
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
```

## Criação de EndPoints (Rotas) para o Servidor

5. Para criar rotas para o nosso servidor, vamos usar o framework Express. Primeiro, precisamos instalar o Express. Abra o terminal no Visual Studio Code (View -> Terminal) e execute o seguinte comando:

```bash
    npm install express
```

6. Agora, podemos usar o Express para criar as rotas. Aqui está um exemplo de como você pode fazer isso:
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
```
Este código cria um servidor Express que responde com "Olá, mundo!" para requisições GET na rota "/". O servidor está configurado para escutar na porta 3000.

## Instalação de Dependências

Este projeto requer várias dependências para funcionar corretamente. Aqui estão os comandos que você precisa executar para instalar essas dependências:

1. Express: É um framework para Node.js que simplifica o desenvolvimento de aplicações web. Instale-o com o seguinte comando:

```bash
npm install express --save
```

2. Nodemon: É uma ferramenta que ajuda a desenvolver aplicações baseadas em node.js ao reiniciar automaticamente a aplicação de node quando detecta alterações de arquivo no diretório. Instale-o globalmente com o seguinte comando:

```bash
npm install -g nodemon
```

Você pode verificar a versão do Nodemon com o seguinte comando:

```bash
nodemon -v
```

3. MySQL2: É um driver de MySQL para Node.js. Ele permite que o Node.js interaja com bancos de dados MySQL. Instale-o com o seguinte comando:

```bash
npm install --save mysql2
```

4. Sequelize: É um ORM (Object-Relational Mapper) para Node.js. Ele permite que você interaja com bancos de dados SQL de uma maneira orientada a objetos. Instale-o com o seguinte comando:

```bash
npm install --save sequelize
```

5. Express-Handlebars: É um motor de visualização para Express. Ele permite que você use o Handlebars.js em suas aplicações Express. Instale-o com o seguinte comando:

```bash
npm install --save express-handlebars
```

## Executando a Aplicação

Depois de instalar todas as dependências, você pode iniciar a aplicação com o seguinte comando:

```bash
node app.js
```

Ou, se você instalou o Nodemon, você pode usar o seguinte comando para iniciar a aplicação. O Nodemon reiniciará automaticamente a aplicação sempre que você fizer alterações no código:

```bash
nodemon app.js
```

Você também pode adicionar um script de inicialização ao seu arquivo `package.json` para facilitar a inicialização da aplicação. Adicione a seguinte linha à seção "scripts" do seu `package.json`:

```json
"start": "nodemon app.js"
```

Agora, você pode iniciar a aplicação com o seguinte comando:

```bash
npm start
```

## Acessando a Aplicação

Depois de iniciar a aplicação, você pode acessá-la no seu navegador da web. A aplicação está configurada para escutar na porta 4000, então você pode acessá-la em `http://localhost:4000`.

A aplicação tem duas rotas:

1. `/`: Esta é a rota principal da aplicação. Você pode acessá-la em `http://localhost:4000/`.

2. `/sobre`: Esta é a rota "sobre" da aplicação. Você pode acessá-la em `http://localhost:4000/sobre`.

## Acesso ao Banco De Dados MySQL

Para trabalharmos com o banco de dados MySQL, será necessário fazermos a instalação de uma extensão do Node.js. Ela se chama “mysql2”. Para isso, vamos no prompt de comando e pare a execução do servidor.

Digite o código abaixo no prompt de comando e aperte enter:

```bash
npm install --save mysql2
```

## Criação do Banco de Dados no XAMPP

1. Inicie o XAMPP e clique no botão "Start" ao lado de "Apache" e "MySQL" no painel de controle do XAMPP.

2. Abra um navegador da web e digite `http://localhost/phpmyadmin` na barra de endereços. Isso abrirá o phpMyAdmin.

3. No menu superior, clique em "Bancos de dados".

4. Na página "Bancos de dados", digite o nome do seu banco de dados, no nosso caso "escolaxyz", no campo "Criar banco de dados" e clique em "Criar".

5. Agora você será redirecionado para a página do seu banco de dados. Aqui, você pode criar tabelas. Digite o nome da sua tabela (por exemplo, "alunos") no campo "Nome" e defina o número de colunas (por exemplo, 5 para "id", "matricula", "nome", "cpf" e "rg"). Clique em "Executar" para criar a tabela.

6. Agora você será redirecionado para a página da tabela. Aqui, você pode definir os nomes das colunas, os tipos de dados e outros atributos. Depois de preencher todas as informações, clique em "Salvar".

Parabéns, você criou um banco de dados e uma tabela no XAMPP usando o phpMyAdmin!

Ou, se preferir, você pode criar o banco de dados e a tabela usando o seguinte código SQL:

```sql
CREATE DATABASE escolaxyz;

USE escolaxyz;

CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    matricula VARCHAR(50),
    nome VARCHAR(100),
    cpf VARCHAR(14),
    rg VARCHAR(20)
);
```
Este código SQL primeiro cria um banco de dados chamado "escolaxyz". Em seguida, ele seleciona esse banco de dados com o comando USE. Finalmente, ele cria uma tabela chamada "alunos" com as colunas "id", "matricula", "nome", "cpf" e "rg". O "id" é um número inteiro que é automaticamente incrementado e é a chave primária da tabela. "matricula", "nome", "cpf" e "rg" são campos de texto (VARCHAR) com diferentes comprimentos.