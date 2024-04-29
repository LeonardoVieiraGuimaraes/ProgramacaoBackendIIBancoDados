// MÓDULOS EXTERNOS OU DE TERCEIROS
// Esses são módulos que você instala via npm. Eles são requeridos pelo nome do pacote.
// Aqui está um exemplo do módulo 'express':

const express = require("express"); // Importando o módulo 'express'
const port = 8080; // Definindo a porta do servidor
const app = express(); // Criando uma aplicação express
app.get("/", (req, res) => {
  // Definindo uma rota GET para a raiz do site
  res.send("Olá, mundo!"); // Enviando uma resposta para o cliente
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Ouvindo na porta 8080

// // Importando o módulo 'http'
// const http = require("http");

// // Acessando a lista de métodos HTTP permitidos
// const methods = http.METHODS;

// // Acessando a lista de códigos de status HTTP
// const statusCodes = http.STATUS_CODES;

// // Imprimindo os métodos e códigos de status
// console.log(methods);
// console.log(statusCodes);
