// Importando o módulo Express
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

// // Definindo a rota para inserir um novo livro
// router.post("/livros", livroControlador.inserirLivro);

// // Definindo a rota para listar um livro pelo ID
// router.get("/livros/:id", livroControlador.listarLivroID);

// // Definindo a rota para atualizar um livro existente
// router.put("/livros/:id", livroControlador.atualizarLivro);

// // Definindo a rota para remover um livro existente
// router.delete("/livros/:id", livroControlador.removerLivro);

// Exportando o roteador
module.exports = rotas;
