const Sequelize = require("sequelize");
const sequelize = require("./db.js");

// Define o modelo para a tabela 'tbalunos'
const Aluno = sequelize.define("tbalunos", {
  // Aqui você pode definir os campos da tabela
  matricula: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Verifica se a tabela 'tbalunos' já existe
sequelize
  .query("SELECT 1 FROM tbalunos LIMIT 1")
  .then(() => {
    console.log("A tabela já existe.");
  })
  .catch(() => {
    // Se a tabela não existir, cria a tabela
    Aluno.sync({ force: true }).then(() => {
      console.log("Tabela criada com sucesso.");
    });
  });

module.exports = Aluno;
