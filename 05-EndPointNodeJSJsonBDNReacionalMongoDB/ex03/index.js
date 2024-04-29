// Importando o módulo Express, que é usado para criar o servidor HTTP
const express = require("express");

// Importando o módulo Mongoose, que é usado para interagir com o MongoDB
const mongoose = require("mongoose");

// Importando as rotas dos livros, que são usadas para lidar com as requisições HTTP relacionadas aos livros
const livrosRotas = require("./router/livroRotas");

// Definindo a porta na qual o servidor irá rodar
// Se a variável de ambiente PORT estiver definida, ela será usada
// Caso contrário, será usada a porta 4000
const PORT = process.env.PORT || 4000;

// Criando uma nova aplicação Express
const app = express();

// Conectando ao MongoDB usando Mongoose
// Se a variável de ambiente MOMGO_URL estiver definida, ela será usada como a URL de conexão
// Caso contrário, será usada a URL "mongodb://localhost:27017/Biblioteca"
mongoose
  .connect(process.env.MOMGO_URL || "mongodb://localhost:27017/Biblioteca")
  .then(() => console.log("Conexão efetuada com sucesso")) // Se a conexão for bem-sucedida, uma mensagem será exibida no console
  .catch((err) => console.log(`Erro ao conectar no banco de dados: ${err}`)); // Se ocorrer um erro durante a tentativa de conexão, o erro será exibido no console

// Usando o middleware 'express.json' para analisar o corpo das requisições HTTP como JSON
app.use(express.json());

// Usando as rotas dos livros para todas as requisições que começam com "/"
app.use("/", livrosRotas);

// Começando a ouvir na porta definida
// Quando o servidor começar a ouvir, uma mensagem será exibida no console
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
