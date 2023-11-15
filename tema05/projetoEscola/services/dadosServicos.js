// Definindo uma função assíncrona chamada listarLivrosID que recebe um id como parâmetro.
// Esta função é usada para encontrar um livro na base de dados pelo seu id.
exports.listarLivrosID = async (id) => {
  // A função findById do modelo de dados é chamada com o id passado como parâmetro.
  // Esta função retorna uma Promise que resolve para o livro encontrado ou null se nenhum livro for encontrado.
  // O await é usado para esperar a Promise resolver antes de retornar o resultado.
  return await dadosModelo.findById(id);
};

// Definindo uma função assíncrona chamada atualizarLivros que recebe um id e dados como parâmetros.
// Esta função é usada para atualizar os dados de um livro na base de dados.
exports.atualizarLivros = async (id, dados) => {
  // A função findByIdAndUpdate do modelo de dados é chamada com o id e os dados passados como parâmetros.
  // Esta função retorna uma Promise que resolve para o livro atualizado ou null se nenhum livro for encontrado.
  // O await é usado para esperar a Promise resolver antes de retornar o resultado.
  return await dadosModelo.findByIdAndUpdate(id, dados);
};

// Definindo uma função assíncrona chamada removerLivros que recebe um id como parâmetro.
// Esta função é usada para remover um livro da base de dados pelo seu id.
exports.removerLivros = async (id) => {
  // A função findByIdAndRemove do modelo de dados é chamada com o id passado como parâmetro.
  // Esta função retorna uma Promise que resolve para o livro removido ou null se nenhum livro for encontrado.
  // O await é usado para esperar a Promise resolver antes de retornar o resultado.
  return await dadosModelo.findByIdAndRemove(id);
};
