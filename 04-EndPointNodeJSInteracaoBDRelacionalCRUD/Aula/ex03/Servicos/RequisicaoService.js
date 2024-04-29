// Importando os módulos necessários
const ConexaoBD = require("../ConexaoBD"); // Importando a classe ConexaoBD do módulo ConexaoBD
const Aluno = require("../Aluno"); // Importando a classe Aluno do módulo Aluno

// Definindo a classe RequisicaoService
class RequisicaoService {
  // Construtor da classe
  constructor() {
    // Nenhum campo é inicializado no construtor neste caso
  }

  // Método para validar a requisição
  async validarRequisicao(request, response) {
    // Criando uma nova instância da classe ConexaoBD
    const conexaoBD = new ConexaoBD();
    // Obtendo a conexão com o banco de dados
    const connection = await conexaoBD.getConexao();

    // Verificando a URL da requisição
    if (request.url === "/") {
      // Se a URL for "/", enviamos uma mensagem de teste como resposta
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Olá mundo! Teste funcionando...");
    } else if (request.url === "/retornar-alunos") {
      // Se a URL for "/retornar-alunos", buscamos os alunos no banco de dados e enviamos como resposta
      const aluno = new Aluno();
      const alunos = await aluno.getAlunos(connection);
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(alunos));
    } else if (request.url === "/cadastro") {
      // Se a URL for "/cadastro", enviamos uma mensagem como resposta
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<h1>Meu Cadastro</h1>");
    }

    // Encerrando a resposta
    response.end();
    // Fechando a conexão com o banco de dados
    conexaoBD.fecharConexao(connection);
  }
}

// Exportando a classe RequisicaoService
module.exports = RequisicaoService;
