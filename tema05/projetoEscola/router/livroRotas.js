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
rotas.route("/").get(listarLivros).post(inserirLivro);
rotas.route("/:id").get(listarLivroID).put(atualizarLivro).delete(removerLivro);

// router.post("/", listarLivros);
// // Definindo a rota para inserir um novo livro
// router.post("/livros", inserirLivro);

// // Definindo a rota para listar um livro pelo ID
// router.get("/livros/:id", listarLivroID);

// // Definindo a rota para atualizar um livro existente
// router.put("/livros/:id", atualizarLivro);

// // Definindo a rota para remover um livro existente
// router.delete("/livros/:id", removerLivro);

// Exportando o roteador
module.exports = rotas;
