// Importa o módulo Express.js.
const express = require("express");

// Cria uma nova aplicação Express.
const app = express();

// Define um manipulador de rota para solicitações GET para a rota raiz ("/").
// Quando uma solicitação GET é recebida para a rota raiz, a função de callback é chamada.
// A função de callback envia a resposta "Sou programador Node.js" para o cliente.
app.get("/", (req, res) => {
  res.send("Sou programador Node.js");
});

// Faz a aplicação começar a escutar por conexões na porta 3000.
// Quando o servidor começa a escutar por conexões, a função de callback é chamada.
// A função de callback imprime a mensagem "Server running at http://localhost:3000/" no console.
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
