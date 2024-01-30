// Importando o módulo Express, que é usado para criar o servidor HTTP
const express = require("express");

// Importando os controladores de livros, que são funções que lidam com as requisições HTTP
const {
  listarLivros, // Função para listar todos os livros
  inserirLivro, // Função para inserir um novo livro
  listarLivroID, // Função para listar um livro específico pelo ID
  atualizarLivro, // Função para atualizar um livro específico pelo ID
  removerLivro, // Função para remover um livro específico pelo ID
} = require("../controller/livroControle");

// Criando um novo roteador Express, que é usado para definir as rotas do servidor
const rotas = express.Router();

// Definindo a rota para listar todos os livros e inserir um novo livro
// Quando uma requisição GET é feita para "/livros", a função listarLivros é chamada
// Quando uma requisição POST é feita para "/livros", a função inserirLivro é chamada
rotas.route("/livros").get(listarLivros).post(inserirLivro);

// Definindo a rota para listar, atualizar e remover um livro específico pelo ID
// Quando uma requisição GET é feita para "/livros/:id", a função listarLivroID é chamada
// Quando uma requisição PUT é feita para "/livros/:id", a função atualizarLivro é chamada
// Quando uma requisição DELETE é feita para "/livros/:id", a função removerLivro é chamada
rotas
  .route("/livros/:id")
  .get(listarLivroID)
  .put(atualizarLivro)
  .delete(removerLivro);

// Exportando o roteador para que ele possa ser usado em outros módulos
module.exports = rotas;
