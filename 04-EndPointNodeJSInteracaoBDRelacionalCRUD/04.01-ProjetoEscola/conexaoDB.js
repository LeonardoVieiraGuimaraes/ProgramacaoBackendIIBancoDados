const mysql = require("mysql2");

class ConexaoBD {
  constructor() {
    this.connection = null; // Inicializa a conexão como nula.
  }

  // Método para obter a conexão.
  getConexao() {
    if (!this.connection) {
      this.connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "escola",
      });

      this.connection.connect((err) => {
        if (err) {
          console.error("Erro ao conectar:", err);
          return;
        }

        console.log("Conexão bem-sucedida!");
      });
    }

    return this.connection;
  }

  // Método para fechar a conexão.
  fecharConexao() {
    if (this.connection) {
      this.connection.end((err) => {
        if (err) {
          console.error("Erro ao fechar a conexão:", err);
          return;
        }

        console.log("Conexão fechada com sucesso!");
        this.connection = null; // Define a conexão como nula após fechá-la.
      });
    }
  }
}

module.exports = ConexaoBD;
