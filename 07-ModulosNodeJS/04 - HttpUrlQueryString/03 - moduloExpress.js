// Importa o módulo externo express. Express é um framework para Node.js que simplifica o desenvolvimento de aplicações web.
const express = require("express");

// Cria uma instância do express. Esta instância será usada para configurar e iniciar o servidor.
const app = express();

// Define uma rota para a URL raiz ("/"). Quando uma requisição GET é feita para a URL raiz, a função fornecida é chamada.
// A função recebe dois argumentos: um objeto que representa a requisição (req) e um objeto que representa a resposta (res).
app.get("/", (req, res) => {
  // A função envia a string "Sou programador Node.js" como resposta.
  res.send("Sou programador Node.js");
});

// Inicia o servidor para escutar na porta 3000. Quando o servidor começa a escutar, a função fornecida é chamada.
app.listen(3000, () => {
  // A função imprime a string "Server running at http://localhost:3000/" no console.
  console.log("Server running at http://localhost:3000/");
});
