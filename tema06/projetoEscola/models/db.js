const Sequelize = require("sequelize");
const sequelize = new Sequelize("escola", "root", {
  host: "localhost", // O host do banco de dados
  dialect: "mysql", // O banco de dados que será utilizado
});

module.exports = { Sequelize: Sequelize, sequelize: sequelize };
