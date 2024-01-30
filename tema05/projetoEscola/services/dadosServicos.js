// Importando o modelo de dados, que é usado para interagir com o banco de dados
const dadosModelo = require("../models/dados");

// Exportando uma função assíncrona para listar todos os livros
exports.listarLivros = async () => {
  // Usando o método 'find' do modelo de dados para buscar todos os livros no banco de dados
  // O método 'find' retorna uma Promise, então usamos 'await' para esperar a Promise resolver antes de retornar o resultado
  return await dadosModelo.find();
};

// Exportando uma função assíncrona para inserir um novo livro
exports.inserirLivros = async (dados) => {
  // Usando o método 'create' do modelo de dados para inserir um novo livro no banco de dados
  // O método 'create' retorna uma Promise, então usamos 'await' para esperar a Promise resolver antes de retornar o resultado
  return await dadosModelo.create(dados);
};

// Exportando uma função assíncrona para listar um livro específico pelo ID
exports.listarLivroID = async (id) => {
  // Usando o método 'findById' do modelo de dados para buscar um livro específico pelo ID no banco de dados
  // O método 'findById' retorna uma Promise, então usamos 'await' para esperar a Promise resolver antes de retornar o resultado
  return await dadosModelo.findById(id);
};

// Exportando uma função assíncrona para atualizar um livro específico pelo ID
exports.atualizarLivro = async (id, dados) => {
  // Usando o método 'findByIdAndUpdate' do modelo de dados para atualizar um livro específico pelo ID no banco de dados
  // O método 'findByIdAndUpdate' retorna uma Promise, então usamos 'await' para esperar a Promise resolver antes de retornar o resultado
  return await dadosModelo.findByIdAndUpdate(id, dados);
};

// Exportando uma função assíncrona para remover um livro específico pelo ID
exports.removerLivro = async (id) => {
  // Usando o método 'findByIdAndRemove' do modelo de dados para remover um livro específico pelo ID no banco de dados
  // O método 'findByIdAndRemove' retorna uma Promise, então usamos 'await' para esperar a Promise resolver antes de retornar o resultado
  return await dadosModelo.findByIdAndRemove(id);
};
