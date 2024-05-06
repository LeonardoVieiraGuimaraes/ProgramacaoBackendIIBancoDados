// Define a classe Aluno.
class Aluno {
  // Define o construtor da classe.
  constructor() {}

  // Define o método getAlunos como uma função assíncrona.
  async getAlunos(connection) {
    // Retorna uma nova Promise.
    return new Promise((resolve, reject) => {
      let jsonAlunos = "";
      // Executa uma query SQL para buscar todos os alunos.
      connection.query("SELECT * FROM alunos", (err, rows) => {
        if (err) {
          // Se houver um erro, imprime a mensagem de erro e rejeita a Promise.
          console.error("Erro ao executar a query:", err);
          return reject(err);
        }

        // Se a query for executada com sucesso, converte o resultado para JSON e resolve a Promise.
        jsonAlunos = JSON.stringify(rows);

        // Resolve a Promise com o resultado.
        return resolve(jsonAlunos);
      });
    });
  }
}

// Exporta a classe Aluno para que ela possa ser usada em outros módulos.
module.exports = Aluno;
