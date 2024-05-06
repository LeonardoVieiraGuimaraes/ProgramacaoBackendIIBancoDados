const express = require("express");

const mongoose = require("mongoose");
const port = 4123;
const system = express();
const alunoRotas = require("./rotas/alunoRotas");

mongoose
  .connect("mongodb://localhost:27017/escola")
  .then(() => {
    console.log("Conectado ao banco de dados");
  })
  .catch((error) => {
    console.log("Erro ao conectar ao banco de dados: " + error);
  });

system.use(express.json());
system.use("/alunos", alunoRotas);
system.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
