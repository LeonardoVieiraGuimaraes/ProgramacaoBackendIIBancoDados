// Importando o módulo mongoose, que é uma biblioteca do Node.js para modelagem de dados do MongoDB.
const mongoose = require("mongoose");

// Acessando a classe Schema do mongoose, que é usada para definir a estrutura dos documentos dentro de uma coleção do MongoDB.
const Schema = mongoose.Schema;

// Criando um novo Schema para os livros. Cada livro terá um id, nome, autores, ano de publicação, editora, estado de publicação e número de páginas.
const LivroSchema = new Schema({
  nomeLivro: String, // O campo nomeLivro é uma string que armazena o nome do livro.
  autores: String, // O campo autores é uma string que armazena os nomes dos autores do livro.
  anoPublicacao: Number, // O campo anoPublicacao é um número que armazena o ano de publicação do livro.
  editora: String, // O campo editora é uma string que armazena o nome da editora que publicou o livro.
  estadoPublicacao: String, // O campo estadoPublicacao é uma string que armazena o estado de publicação do livro.
  numeroPaginas: Number, // O campo numeroPaginas é um número que armazena o número de páginas do livro.
});

// Exportando o modelo de livro. Este modelo será usado para criar, ler, atualizar e deletar documentos na coleção de livros do MongoDB.
module.exports = mongoose.model("Livros", LivroSchema);
