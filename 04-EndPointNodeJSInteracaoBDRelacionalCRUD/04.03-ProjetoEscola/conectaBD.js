// Importa o módulo 'mysql' do Node.js, que fornece funcionalidades para trabalhar com MySQL.
const mysql = require("mysql2");

// Cria uma classe para gerenciar a conexão com o banco de dados.
class ConexaoBD {
  constructor() {
    this.connection = null; // Inicializa a propriedade 'connection' como nula.
  }

  // Método para obter a conexão.
  getConexao() {
    // Cria uma nova conexão com o banco de dados.
    this.connection = mysql.createConnection({
      host: "localhost", // O host do banco de dados.
      user: "root", // O nome de usuário para se conectar ao banco de dados.
      password: "", // A senha para se conectar ao banco de dados.
      database: "escola", // O nome do banco de dados para se conectar.
      port: 3306, // A porta do banco de dados.
    });

    // Método para estabelecer a conexão.
    this.connection.connect((err) => {
      if (err) {
        // Se houver um erro ao conectar, imprime a mensagem de erro e retorna.
        console.error("Erro ao conectar ao banco de dados:", err);
        return;
      }

      // Se a conexão for estabelecida com sucesso, imprime uma mensagem de sucesso.
      console.log("Conexão estabelecida com sucesso!");
    });
    return this.connection;
  }

  // Método para fechar a conexão.
  fecharConexao(connection) {
    connection.end((err) => {
      if (err) {
        // Se houver um erro ao fechar a conexão, imprime a mensagem de erro e retorna.
        console.error("Erro ao fechar a conexão:", err);
        return;
      }

      // Se a conexão for fechada com sucesso, imprime uma mensagem de sucesso.
      console.log("Conexão fechada com sucesso!");
    });
  }
}

// Exporta a classe ConexaoBD para que ela possa ser usada em outros módulos.
module.exports = ConexaoBD;
