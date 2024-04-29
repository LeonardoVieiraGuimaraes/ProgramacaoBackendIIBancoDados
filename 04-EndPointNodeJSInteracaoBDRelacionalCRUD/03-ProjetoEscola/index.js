// Importando todas as funções do módulo conectaBD.js
const db = require("./conectaBD.js");

// Função auto-executável assíncrona para lidar com operações assíncronas
(async () => {
  try {
    // Estabelecendo conexão com o banco de dados
    await db.conecta();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");

    // Criando um objeto aluno para inserção
    const carlos = { nome: "Carlos", turma: "A", telefone: "123456789" };

    // Criando um objeto aluno para inserção
    const leonardo = { nome: "leonardo", turma: "A", telefone: "123456789" };
    // Criando um objeto aluno para inserção
    const refael = { nome: "Carlos", turma: "b", telefone: "123456789" };

    // Inserindo o aluno no banco de dados
    await db.inserirAluno(carlos);
    await db.inserirAluno(leonardo);
    await db.inserirAluno(refael);
    console.log("Aluno inserido com sucesso!");

    // Criando um objeto aluno para alteração
    const alunoAlterado = { id: 1, telefone: "987654321" };

    // Alterando o aluno no banco de dados
    await db.alterarAluno(alunoAlterado);
    console.log("Aluno alterado com sucesso!");

    // Definindo o id do aluno a ser excluído
    const id = 1;

    // Excluindo o aluno do banco de dados
    await db.excluirAluno(id);
    console.log(`Aluno com id ${id} excluído com sucesso!`);

    // Obtendo todos os alunos do banco de dados
    const alunos = await db.todosAlunos();
    console.log("Alunos no banco de dados:", alunos);
  } catch (err) {
    // Lidando com erros
    console.error("Falha ao realizar operação no banco de dados:", err);
  }
})();
