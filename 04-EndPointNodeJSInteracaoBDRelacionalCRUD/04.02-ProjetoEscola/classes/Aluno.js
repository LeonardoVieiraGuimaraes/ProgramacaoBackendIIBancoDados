// Define a classe Aluno
class Aluno {
  constructor(nome, turma, telefone) {
    // Define a propriedade nome do objeto Aluno
    this.nome = nome;
    this.turma = turma;
    this.telefone = telefone;
  }

  // Define o método getAlunos
  getAlunos(connection) {
    // Executa uma query SQL para selecionar todos os registros da tabela alunos
    connection.query("SELECT * FROM alunos", (err, rows) => {
      // Se houver um erro ao executar a query, imprime o erro e retorna
      if (err) {
        console.error("Erro ao executar a query:", err);
        return;
      }

      // Imprime o resultado da query
      console.log("Resultado da query:", rows);
    });
  }
}

// Exporta a classe Aluno para que ela possa ser usada em outros módulos
module.exports = Aluno;
