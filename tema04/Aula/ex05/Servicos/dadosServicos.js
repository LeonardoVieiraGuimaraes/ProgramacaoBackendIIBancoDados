// Importa o módulo 'dadosModelo', que provavelmente é um modelo Mongoose.
const dadosModelo = require("../Modelo/dados");

// Exporta a função assíncrona 'consultarTodos'.
exports.consultarTodos = async () => {
  // Retorna todos os documentos do modelo 'dadosModelo'.
  // A função 'find' de Mongoose retorna uma promessa que resolve para um array de documentos.
  return await dadosModelo.find();
};

// Exporta a função assíncrona 'inserirAluno'.
exports.inserirAluno = async (dado) => {
  // Cria um novo documento no modelo 'dadosModelo' com os dados fornecidos.
  // A função 'create' de Mongoose retorna uma promessa que resolve para o documento criado.
  return await dadosModelo.create(dado);
};
