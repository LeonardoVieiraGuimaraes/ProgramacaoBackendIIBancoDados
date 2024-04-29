# Node.js: Interação com Banco de Dados Relacional MySQL

Este repositório tem como objetivo fornecer uma introdução à interação entre Node.js e MySQL, abordando conceitos como Endpoint e CRUD (Criação, Leitura, Atualização e Exclusão de dados).

## Metas de Aprendizado

Ao final deste estudo, você será capaz de:

1. **Entender o conceito de Endpoint.** Um endpoint é um ponto final de uma comunicação. No desenvolvimento web, um endpoint pode ser uma URL onde um serviço web pode ser acessado por uma aplicação cliente.

2. **Aprender sobre Banco de Dados Relacional MySQL.** MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto que usa SQL (Structured Query Language) para adicionar, acessar e gerenciar conteúdo.

3. **Compreender o conceito de CRUD.** CRUD é um acrônimo para as quatro operações básicas realizadas em um banco de dados: criar (Create), ler (Read), atualizar (Update) e deletar (Delete).

4. **Criar uma aplicação Node.js, usando o conceito CRUD.** Isso envolve a criação de uma aplicação que pode criar, ler, atualizar e deletar dados de um banco de dados MySQL.

5. **Saber como planejar o desenvolvimento de um banco de dados.** Isso envolve a compreensão de como estruturar e organizar um banco de dados para atender às necessidades de uma aplicação.

6. **Desenvolver capacidade analítica para usar os conceitos de Node.js e MySQL na resolução de um problema da vida real.** Isso envolve a aplicação prática dos conceitos aprendidos para resolver problemas reais.

7. **Adquirir conhecimento necessário para iniciar e concluir pequenos e grandes projetos, usando linguagem de programação orientada a objetos.** Isso envolve a compreensão de como aplicar os princípios da programação orientada a objetos em projetos de diferentes tamanhos.


## Download do MySQL Workbench

MySQL Workbench é uma ferramenta visual para trabalhar com bancos de dados MySQL. Você pode baixá-lo do [site oficial do MySQL](https://dev.mysql.com/downloads/workbench/).

## Instalação do MySQL Workbench

Após o download, siga as instruções do instalador para instalar o MySQL Workbench em seu sistema.

## Executando o MySQL Workbench

Depois de instalado, você pode iniciar o MySQL Workbench através do menu Iniciar no Windows ou através do Launchpad no MacOS.

## Criando o Banco de Dados Escola

No MySQL Workbench, você pode criar um novo banco de dados usando a seguinte consulta SQL:

    ```sql
    CREATE DATABASE Escola;
    ```

Criando a Tabela
No banco de dados Escola, você pode criar uma tabela com as seguintes colunas:

 ```sql
    CREATE TABLE Alunos (
    id INT(11),
    Nome VARCHAR(45),
    Turma VARCHAR(12),
    Telefone VARCHAR(12)
);
```



## Instalação


Para começar a usar o Node.js, você precisa instalá-lo em seu computador. Você pode baixar o Node.js do [site oficial](https://nodejs.org/).

Depois de instalado, você pode verificar a versão do Node.js e do npm (Node Package Manager) usando os seguintes comandos no terminal:

    ```bash
    node -v # Verifica a versão do Node.js
    npm -v  # Verifica a versão do npm
    ```

Criando um Servidor Web Simples com Node.js
No Node.js, você pode criar um servidor web simples usando o módulo http. Aqui está um exemplo:

    ```bash
        const http = require('http');
        
        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Olá, Mundo!\n');
        });
        
        server.listen(3000, '127.0.0.1', () => {
            console.log('Servidor rodando em http://127.0.0.1:3000/');
        });
    ```

Criando Endpoint (Rotas) em nosso Servidor Web com Node.js
No Node.js, você pode criar rotas em seu servidor web usando o módulo http ou um framework como Express.js. Aqui está um exemplo com Express.js:

    ```bash
        const express = require('express');
        const app = express();
        
        app.get('/', (req, res) => {
            res.send('Olá, Mundo!');
        });
        
        app.listen(3000, () => {
            console.log('Servidor rodando em http://127.0.0.1:3000/');
        });
    ```

Manipulação de Banco de Dados MySQL Utilizando Endpoint Node.js
No Node.js, você pode interagir com um banco de dados MySQL usando um módulo como mysql. Aqui está um exemplo de como conectar ao banco de dados e executar uma consulta:

    ```bash
        const mysql = require('mysql');
        
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'seu_usuario',
            password: 'sua_senha',
            database: 'Escola'
        });
        
        connection.connect((err) => {
            if (err) throw err;
            console.log('Conectado!');
        });
        
        connection.query('SELECT * FROM Alunos', (err, rows, fields) => {
            if (err) throw err;
            console.log('Os dados da tabela Alunos são: ', rows);
        });
        
        connection.end();
    ```
Lembre-se de substituir 'seu_usuario' e 'sua_senha' com seu nome de usuário e senha do MySQL.