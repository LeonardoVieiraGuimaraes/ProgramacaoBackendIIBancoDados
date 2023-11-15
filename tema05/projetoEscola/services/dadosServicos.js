// Importando o modelo de dados do diretório 'models'.
// O método 'require' é usado no Node.js para importar módulos.
// Neste caso, estamos importando o módulo 'dados' que está localizado na pasta 'models' que é um diretório acima do arquivo atual (indicado pelo '../' no início do caminho).
// O módulo 'dados' provavelmente define a estrutura dos dados que serão usados em nossa aplicação, geralmente através de um esquema Mongoose se estivermos trabalhando com MongoDB.
// O módulo importado é então atribuído à constante 'dadosModelo', que pode ser usada para acessar as funções e propriedades exportadas pelo módulo 'dados'.
const dadosModelo = require("../models/dados");

// Definindo a função assíncrona 'ListarLivros' que retorna todos os livros do banco de dados.
// A função 'find' do Mongoose é usada para encontrar todos os documentos na coleção que correspondem à condição fornecida.
// Neste caso, não estamos fornecendo nenhuma condição, então 'find' retornará todos os documentos na coleção.
exports.listarLivros = async () => {
  return await dadosModelo.find();
};

// Definindo a função assíncrona 'inserirLivros' que cria um novo livro no banco de dados.
// A função 'create' do Mongoose é usada para criar um novo documento na coleção.
// A função 'create' recebe um objeto que contém os dados do novo livro.
exports.inserirLivros = async (dados) => {
  return await dadosModelo.create(dados);
};

// Definindo a função assíncrona 'listarLivrosID' que retorna um livro específico do banco de dados pelo seu ID.
// A função 'findById' do Mongoose é usada para encontrar um documento na coleção pelo seu ID.
// A função 'findById' recebe o ID do livro como argumento.
exports.listarLivrosID = async (id) => {
  return await dadosModelo.findById(id);
};

// Definindo a função assíncrona 'atualizarLivros' que atualiza um livro específico no banco de dados.
// A função 'findByIdAndUpdate' do Mongoose é usada para encontrar um documento na coleção pelo seu ID e atualizá-lo com os novos dados fornecidos.
// A função 'findByIdAndUpdate' recebe dois argumentos: o ID do livro que queremos atualizar e os novos dados que queremos definir.
// O ID do livro é passado como o primeiro argumento para 'atualizarLivros', e os novos dados são passados como o segundo argumento.
exports.atualizarLivro = async (id, dados) => {
  return await dadosModelo.findByIdAndUpdate(id, dados);
};

// Definindo a função assíncrona 'removerLivros' que remove um livro específico do banco de dados.
// A função 'findByIdAndRemove' do Mongoose é usada para encontrar um documento na coleção pelo seu ID e removê-lo.
// A função 'findByIdAndRemove' recebe o ID do livro como argumento.
// O ID do livro é passado como o único argumento para 'removerLivros'.
exports.removerLivro = async (id) => {
  return await dadosModelo.findByIdAndRemove(id);
};
