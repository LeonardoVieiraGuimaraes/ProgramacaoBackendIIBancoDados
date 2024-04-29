// Importando o módulo 'mysql' para conectar-se ao banco de dados MySQL
const mysql = require("mysql2");

// Definindo a classe ConexaoBD
class ConexaoBD {
  // Construtor da classe
  constructor() {
    // Propriedade 'connection' que armazenará a conexão com o banco de dados
    this.connection = null;
  }

  // Método para obter a conexão
  getConexao() {
    // Se a conexão ainda não foi estabelecida
    if (this.connection === null) {
      // Configurações para a conexão com o banco de dados MySQL
      this.connection = mysql.createConnection({
        host: "localhost", // O host do banco de dados, neste caso é 'localhost'
        user: "root", // O usuário do banco de dados, neste caso é 'root'
        password: "270414", // A senha do banco de dados, neste caso é 'root'
        database: "escola3", // O nome do banco de dados, neste caso é 'escola'
        port: 3307, // A porta do banco de dados, neste caso é '3307'
      });

      // Estabelecendo a conexão
      this.connection.connect((err) => {
        if (err) {
          console.error("Erro ao conectar ao banco de dados:", err);
          return;
        }
        console.log("Conexão estabelecida com sucesso!");
      });
    }

    // Retorna a conexão
    return this.connection;
  }

  // Método para fechar a conexão
  fecharConexao() {
    // Verificando se a conexão existe
    if (this.connection) {
      // Fechando a conexão
      this.connection.end((err) => {
        if (err) {
          console.error("Erro ao fechar a conexão:", err);
          return;
        }
        console.log("Conexão fechada com sucesso!");
      });
    } else {
      console.error("Erro ao fechar a conexão: Conexão não estabelecida");
    }
  }
}

// Exportando a classe ConexaoBD
module.exports = ConexaoBD;
