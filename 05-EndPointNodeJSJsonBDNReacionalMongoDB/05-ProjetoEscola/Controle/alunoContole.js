// Importa o módulo 'dadosServicos', que provavelmente contém funções para interagir com o banco de dados.
const dadosServicos = require("../Servicos/dadosServicos");

// Define a função assíncrona 'consultarTodos' para lidar com requisições GET para buscar todos os alunos.
exports.consultarTodos = async (requisicao, resposta) => {
  try {
    // Busca todos os alunos usando a função 'consultarTodos' de 'dadosServicos'.
    const alunos = await dadosServicos.consultarTodos();

    // Envia uma resposta JSON com os alunos e uma mensagem de sucesso.
    resposta.json({ data: alunos, status: "Consulta realizada com sucesso!" });
  } catch (erro) {
    // Se houver um erro, envia uma resposta com status 500 e a mensagem de erro.
    resposta.status(500).json({ error: erro.message });
  }
};

// Define a função assíncrona 'inserirAluno' para lidar com requisições POST para inserir um novo aluno.
exports.inserirAluno = async (requisicao, resposta) => {
  try {
    // Insere um novo aluno usando a função 'inserirAluno' de 'dadosServicos'.
    const alunos = await dadosServicos.inserirAluno(requisicao.body);

    // Envia uma resposta JSON com os alunos e uma mensagem de sucesso.
    resposta.json({ data: alunos, status: "Aluno inserido com sucesso!" });
  } catch (erro) {
    // Se houver um erro, envia uma resposta com status 500 e a mensagem de erro.
    resposta.status(500).json({ error: erro.message });
  }
};
