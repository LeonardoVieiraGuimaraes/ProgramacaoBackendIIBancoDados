const mysql = require("mysql2/promise");

async function conecta() {
  if (global.conexao && global.conexao.state !== "disconnected") {
    return global.conexao;
  }

  const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "270414",
    database: "escola",
    port: 3307,
  });

  // console.log("Conexão efetuada com sucesso!");
  global.conexao = con;
  return con;
}

async function todosAlunos() {
  const con = await conecta();
  const [registros] = await con.query("SELECT * FROM alunos");
  return registros;
}

async function inserirAluno(aluno) {
  const con = await conecta();
  const sqlInserir =
    "INSERT INTO alunos (nome, turma, telefone) VALUES (?, ?, ?)";
  const dados = [aluno.nome, aluno.turma, aluno.telefone];
  await con.query(sqlInserir, dados);
}

async function alterarAluno(aluno) {
  const con = await conecta();
  const sqlAlterar = "UPDATE alunos SET telefone = ? WHERE id = ?";
  const dados = [aluno.telefone, aluno.id];
  await con.query(sqlAlterar, dados);
}

async function excluirAluno(id) {
  const con = await conecta();
  const sqlExcluir = "DELETE FROM alunos WHERE id = ?";
  const dados = [id];
  await con.query(sqlExcluir, dados);
}

module.exports = {
  conecta,
  todosAlunos,
  inserirAluno,
  alterarAluno,
  excluirAluno,
};
