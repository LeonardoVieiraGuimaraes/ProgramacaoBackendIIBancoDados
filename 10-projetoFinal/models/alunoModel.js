// Importa os módulos necessários do pacote sequelize
const { Sequelize, DataTypes } = require("sequelize");

// Cria uma nova instância do Sequelize para a conexão com o banco de dados
const sequelize = new Sequelize("escola", "root", "", {
  host: "localhost", // O host do banco de dados
  dialect: "mysql", // O tipo de banco de dados a ser usado
  port: 3306, // A porta em que o banco de dados está rodando
});

// Define o modelo Aluno
const Aluno = sequelize.define("Aluno", {
  nome: {
    type: DataTypes.STRING, // O campo nome é do tipo string
  },
  matricula: {
    type: DataTypes.STRING, // O campo matricula é do tipo string
  },
});

// Sincroniza o modelo Aluno com o banco de dados, criando a tabela 'alunos' se ela não existir
Aluno.sync({ force: false }).then(() => {
  console.log("Tabela 'alunos' criada ou já existente");
});

// Exporta o modelo Aluno para ser usado em outros arquivos
module.exports = Aluno;
