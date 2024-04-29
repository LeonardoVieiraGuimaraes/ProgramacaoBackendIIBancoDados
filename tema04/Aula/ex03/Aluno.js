// Definindo a classe Aluno
class Aluno {
  // Construtor da classe
  constructor() {
    // Nenhum campo é inicializado no construtor neste caso
  }

  // Método para obter alunos
  async getAlunos(connection) {
    // Retornando uma nova Promise
    return new Promise((resolve, reject) => {
      // Inicializando a variável jsonAlunos como null
      let jsonAlunos = null;

      // Executando a query para selecionar todos os alunos
      connection.query("SELECT * FROM alunos", (err, rows) => {
        // Se houver um erro ao executar a query
        if (err) {
          // Logando o erro
          console.error("Erro ao executar a query:", err);
          // Rejeitando a Promise com o erro
          return reject(err);
        }

        // Convertendo o resultado da query para JSON
        jsonAlunos = JSON.stringify(rows);
        // Resolvendo a Promise com o resultado da query em formato JSON
        return resolve(jsonAlunos);
      });
    });
  }
}

// Exportando a classe Aluno
module.exports = Aluno;

// class Aluno {
//   // Construtor da classe
//   constructor(nome, turma, telefone) {
//     this.nome = nome;
//     this.turma = turma;
//     this.telefone = telefone;
//   }

//   getAlunos(connection) {
//     connection.query("SELECT * FROM alunos", (err, rows) => {
//       if (err) {
//         console.error("Erro ao executar a query:", err);
//         return;
//       }
//       console.log("Resultado da query:", rows);
//     });
//   }
// }

// module.exports = Aluno;
