const dadosServicos = require("../servicos/dadosServico");

exports.consultarTodos = async (req, res) => {
  try {
    const dados = await dadosServicos.consultarTodosDados();
    res.send(dados);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.inserirAluno = async (req, res) => {
  try {
    const alunos = await dadosServicos.inserirAluno(req.body);
    res.json({ data: alunos, status: "Aluno inserido com sucesso!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
