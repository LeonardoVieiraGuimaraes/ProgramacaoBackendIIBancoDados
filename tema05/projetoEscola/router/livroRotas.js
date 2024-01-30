const express = require("express");

// Importando o módulo de controladores de livros

const {
  listarLivros,
  inserirLivro,
  listarLivroID,
  atualizarLivro,
  removerLivro,
} = require("../controller/livroControle");

// Criando um novo roteador Express
const rotas = express.Router();

// Definindo a rota para listar todos os livros
rotas.route("/livros").get(listarLivros).post(inserirLivro);
rotas
  .route("/livros/:id")
  .get(listarLivroID)
  .put(atualizarLivro)
  .delete(removerLivro);

module.exports = rotas;
