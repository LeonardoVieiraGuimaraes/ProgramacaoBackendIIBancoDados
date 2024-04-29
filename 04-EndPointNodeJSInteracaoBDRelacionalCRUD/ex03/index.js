// index.js
const db = require("./conectaBD.js");

(async () => {
  try {
    await db.conecta();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    // Inserir aluno
    const carlos = { nome: "Carlos", turma: "A", telefone: "123456789" };
    await db.inserirAluno(carlos);
    console.log("Aluno inserido com sucesso!");

    // Alterar aluno
    const alunoAlterado = { id: 1, telefone: "987654321" };
    await db.alterarAluno(alunoAlterado);
    console.log("Aluno alterado com sucesso!");

    // Excluir aluno
    const id = 1;
    await db.excluirAluno(id);
    console.log(`Aluno com id ${id} excluído com sucesso!`);

    // Mostrar todos os alunos
    const alunos = await db.todosAlunos();
    console.log("Alunos no banco de dados:", alunos);
  } catch (err) {
    console.error(
      "Falha ao conectar realizar operação no banco de dados:",
      err
    );
  }
})();
