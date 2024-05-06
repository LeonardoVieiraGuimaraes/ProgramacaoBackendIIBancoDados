Projeto Escola: Criação de um Servidor HTTP Simples com Node.js e Express
Este repositório contém o código para um servidor HTTP simples criado com Node.js e Express. O servidor responde com "Olá, mundo!" para todas as requisições e está configurado para escutar na porta 3000.

Configuração do Ambiente
Crie uma pasta no seu desktop chamada "Projeto-Escola".
Abra a pasta "Projeto-Escola" no Visual Studio Code. Você pode fazer isso clicando com o botão direito do mouse na pasta e selecionando "Abrir com Code". Alternativamente, você pode abrir o Visual Studio Code e arrastar a pasta para dentro dele.
Criação do Arquivo Principal
Dentro da pasta "Projeto-Escola", crie um novo arquivo chamado "app.js". Este arquivo será o ponto de entrada para a nossa aplicação.
Criação de um Servidor HTTP Simples
No arquivo "app.js", vamos criar um servidor HTTP simples. Para isso, vamos usar o módulo http do Node.js. Aqui está um exemplo de como você pode fazer isso:

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Olá, mundo!');
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

Criação de EndPoints (Rotas) para o Servidor
Para criar rotas para o nosso servidor, vamos usar o framework Express. Primeiro, precisamos instalar o Express. Abra o terminal no Visual Studio Code (View -> Terminal) e execute o seguinte comando:
npm install express
Agora, podemos usar o Express para criar as rotas. Aqui está um exemplo de como você pode fazer isso:
const express = require('express');
const app = express();

Este código cria um servidor Express que responde com "Olá, mundo!" para requisições GET na rota "/". O servidor está configurado para escutar na porta 3000.

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});