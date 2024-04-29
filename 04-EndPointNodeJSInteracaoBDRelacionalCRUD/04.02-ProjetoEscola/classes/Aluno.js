// Define a classe Aluno.
class Aluno {
  // Define o construtor da classe.
  constructor(nome, turma, telefone) {
    this.nome = nome; // Define a propriedade nome.
    this.turma = turma; // Define a propriedade turma.
    this.telefone = telefone; // Define a propriedade telefone.
  }

  // Define o método cumprimentar.
  cumprimentar() {
    // Retorna uma saudação que inclui o nome do aluno.
    return `Olá, meu nome é ${this.nome}`;
  }

  // Define o método getAlunos como uma função assíncrona.
  async getAlunos(connection) {
    // Retorna uma nova Promise.
    return new Promise((resolve, reject) => {
      // Executa uma query SQL para buscar todos os alunos.
      connection.query("SELECT * FROM alunos", (err, rows) => {
        if (err) {
          // Se houver um erro, imprime a mensagem de erro e rejeita a Promise.
          console.error("Erro ao executar a query:", err);
          return reject(err);
        }

        // Se a query for executada com sucesso, converte o resultado para JSON e resolve a Promise.
        const jsonAlunos = JSON.stringify(rows);

        // Resolve a Promise com o resultado.
        return resolve(jsonAlunos);
      });
    });
  }
}

// Exporta a classe Aluno para que ela possa ser usada em outros módulos.
module.exports = Aluno;
