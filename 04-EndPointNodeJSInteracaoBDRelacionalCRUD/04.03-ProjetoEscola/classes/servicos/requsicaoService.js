// Importa a classe ConexaoBD para estabelecer conexão com o banco de dados
const ConexaoBD = require("../../conectaBD");

// Importa a classe Aluno para manipular dados de alunos
const Aluno = require("../Aluno");

// Define a classe RequisicaoService
class RequisicaoService {
  constructor() {}

  // Define o método validarRequisicao como uma função assíncrona
  async validarRequisicao(request, response) {
    // Cria uma nova instância da classe ConexaoBD
    const conexaoBD = new ConexaoBD();

    // Estabelece uma conexão com o banco de dados
    const connection = await conexaoBD.getConexao();

    // Verifica se a URL da requisição é '/'
    if (request.url == "/") {
      response.write("Ola Mundo, Teste Funciona");
    }
    // Verifica se a URL da requisição é '/aluno'
    else if (request.url == "/retornar-alunos") {
      // Cria uma nova instância da classe Aluno
      const aluno = new Aluno();

      // Obtém todos os alunos do banco de dados
      const alunos = await aluno.getAlunos(connection);
      // Escreve a resposta com os dados dos alunos

      response.write(alunos);
    } else if (request.url == "/cadastro") {
      // Cria uma nova instância da classe Aluno
      response.write("Cadastro de Aluno");
    }
    response.end();
    conexaoBD.fecharConexao(connection);
  }
}

// Exporta a classe RequisicaoService para que ela possa ser usada em outros módulos
module.exports = RequisicaoService;
