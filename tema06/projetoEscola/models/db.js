// Importa o módulo Sequelize, que é um ORM para Node.js
const Sequelize = require("sequelize");

// Cria uma nova instância do Sequelize, passando o nome do banco de dados, o nome de usuário e uma string vazia como senha
// O objeto de configuração também é passado, especificando o host e o dialeto do banco de dados
const sequelize = new Sequelize("escolaxyz", "root", "", {
  host: "localhost", // O host do banco de dados
  dialect: "mysql", // O banco de dados que será utilizado
});

// Exporta o Sequelize e a instância do sequelize
// Isso permite que outros módulos importem e usem o Sequelize e a instância do sequelize
module.exports = sequelize;
