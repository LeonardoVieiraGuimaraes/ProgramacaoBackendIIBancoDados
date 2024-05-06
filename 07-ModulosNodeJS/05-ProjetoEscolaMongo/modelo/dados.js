const mongoose = require("mongoose");

// Define o esquema
const alunoSchema = new mongoose.Schema({
  matricula: Number,
  nome: String,
});

// Cria e exporta o modelo
module.exports = mongoose.model("Aluno", alunoSchema);
