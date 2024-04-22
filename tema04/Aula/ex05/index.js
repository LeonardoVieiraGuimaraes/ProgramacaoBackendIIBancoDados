// Importa o módulo 'express', que fornece funcionalidades para criar um servidor HTTP.
const express = require("express");

// Importa o módulo 'mongoose', que fornece funcionalidades para trabalhar com MongoDB.
const mongoose = require("mongoose");

// Define a porta onde o servidor vai rodar.
const PORT = 4123;

// Cria uma nova instância do Express.
const sistema = express();

// Conecta-se ao banco de dados MongoDB usando Mongoose.
mongoose
  .connect("mongodb+srv://root:root@clustere.rolmxzm.mongodb.net/")
  .then(() => {
    // Se a conexão for bem-sucedida, imprime uma mensagem no console.
    console.log("Conexão efetuada com sucesso!");
  })
  .catch((error) => {
    // Se houver um erro, imprime a mensagem de erro no console.
    console.log("Erro:", error);
  });

// Configura o Express para usar o middleware 'express.json'.
// Isso permite que o Express processe corpos de requisição JSON.
sistema.use(express.json());

// Faz o servidor começar a escutar por conexões na porta especificada.
// A função passada para 'listen' é chamada uma vez que o servidor esteja pronto para aceitar conexões.
sistema.listen(PORT, () => {
  console.log("O servidor está rodando!");
});
