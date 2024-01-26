const db = require("./db");

const inserir = db.sequelize.define("alunos", {
  matricula: {
    type: db.Sequelize.INTEGER,
  },
  nome: {
    type: db.Sequelize.STRING,
  },
  cpf: {
    type: db.Sequelize.STRING,
  },
  rg: {
    type: db.Sequelize.STRING,
  },
});

inserir.sync({ force: true }).then(() => {
  console.log("Tabela criada");
});
