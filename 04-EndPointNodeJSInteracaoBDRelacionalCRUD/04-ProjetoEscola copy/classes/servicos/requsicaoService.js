// Importa a classe ConexaoBD.
const ConexaoBD = require("../../conectaBD");

// Importa a classe Aluno.
const Aluno = require("../Aluno");

// Define a função assíncrona validarRequisicao.
async function validarRequisicao(request, response) {
  // Cria uma nova instância da classe ConexaoBD.
  const conexaoBD = new ConexaoBD();

  // Obtém a conexão com o banco de dados.
  const connection = await conexaoBD.getConexao();

  // Verifica a URL da requisição.
  if (request.url === "/") {
    // Se a URL for '/', escreve uma mensagem na resposta.
    response.write("Olá mundo! Teste funcionando..");
  } else if (request.url === "/alunos") {
    // Se a URL for '/alunos', busca todos os alunos do banco de dados.
    const aluno = new Aluno();
    const alunos = await aluno.getAlunos(connection);
    response.write(alunos);
  } else if (request.url === "/cadastro") {
    // Se a URL for '/cadastro', escreve uma mensagem na resposta.
    response.write("Página de cadastro");
  }

  // Sinaliza o fim da resposta.
  response.end();

  // Fecha a conexão com o banco de dados.
  conexaoBD.fecharConexao(connection);
}

// Exporta a função validarRequisicao para que ela possa ser usada em outros módulos.
module.exports = validarRequisicao;
