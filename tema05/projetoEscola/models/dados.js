// Importando o módulo mongoose, que é uma biblioteca do Node.js para modelagem de dados do MongoDB.
const mongoose = require("mongoose");

// Acessando a classe Schema do mongoose, que é usada para definir a estrutura dos documentos dentro de uma coleção do MongoDB.
const Schema = mongoose.Schema;

// Criando um novo Schema para os livros. Cada livro terá um id, nome, autores, ano de publicação, editora, estado de publicação e número de páginas.
const LivroSchema = new Schema({
  titulo: String, // Campo para o título do livro
  autor: String, // Campo para o autor do livro
  anoPublicacao: Number, // Campo para o ano de publicação do livro
});

// Exportando o modelo de livro. Este modelo será usado para criar, ler, atualizar e deletar documentos na coleção de livros do MongoDB.
module.exports = mongoose.model("Livros", LivroSchema);
