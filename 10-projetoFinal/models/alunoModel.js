const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("escola", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const Aluno = sequelize.define("Aluno", {
  nome: {
    type: DataTypes.STRING,
  },
  matricula: {
    type: DataTypes.STRING,
  },
});

// Cria a tabela 'alunos' se ela não existir
Aluno.sync({ force: false }).then(() => {
  console.log("Tabela 'alunos' criada ou já existente");
});

module.exports = Aluno;
