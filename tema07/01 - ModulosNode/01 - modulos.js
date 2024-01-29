// MÓDULOS INTERNOS OU PRINCIPAIS
// Esses são módulos que vêm com o Node.js. Você não precisa instalá-los, apenas requerê-los.
// Aqui está um exemplo do módulo 'http':

const http = require("http"); // Importando o módulo 'http'
http
  .createServer((req, res) => {
    // Criando um servidor HTTP
    res.write("Olá, mundo!"); // Escrevendo uma resposta para o cliente
    res.end(); // Finalizando a resposta
  })
  .listen(8080); // Ouvindo na porta 8080

// MÓDULOS LOCAIS
// Esses são módulos que você escreveu. Eles são requeridos pelo caminho do arquivo.
// Suponha que você tenha um módulo em './meuModulo.js':

const meuModulo = require("./meuModulo"); // Importando o módulo local 'meuModulo'
meuModulo.minhaFuncao(); // Chamando uma função do módulo 'meuModulo'

// MÓDULOS EXTERNOS OU DE TERCEIROS
// Esses são módulos que você instala via npm. Eles são requeridos pelo nome do pacote.
// Aqui está um exemplo do módulo 'express':

const express = require("express"); // Importando o módulo 'express'
const app = express(); // Criando uma aplicação express
app.get("/", (req, res) => {
  // Definindo uma rota GET para a raiz do site
  res.send("Olá, mundo!"); // Enviando uma resposta para o cliente
});
app.listen(8080); // Ouvindo na porta 8080

// Importando o módulo 'http'
const http = require("http");

// Acessando a lista de métodos HTTP permitidos
const methods = http.METHODS;

// Acessando a lista de códigos de status HTTP
const statusCodes = http.STATUS_CODES;

// Imprimindo os métodos e códigos de status
console.log(methods);
console.log(statusCodes);
