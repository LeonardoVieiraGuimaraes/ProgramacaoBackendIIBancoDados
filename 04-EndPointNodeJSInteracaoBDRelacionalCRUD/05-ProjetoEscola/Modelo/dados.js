// Importa o módulo 'mongoose', que fornece funcionalidades para trabalhar com MongoDB.
const mongoose = require("mongoose");

// Cria um novo esquema Mongoose para um aluno.
// Um esquema define a estrutura dos documentos dentro de uma coleção no MongoDB.
const alunoEsquema = new mongoose.Schema({
  // Define que o campo 'matricula' deve ser um número.
  matricula: Number,

  // Define que o campo 'nome' deve ser uma string.
  nome: String,
});

// Exporta o esquema como um modelo Mongoose chamado 'Aluno'.
// Um modelo é uma classe que constrói documentos no MongoDB.
module.exports = mongoose.model("Aluno", alunoEsquema);
