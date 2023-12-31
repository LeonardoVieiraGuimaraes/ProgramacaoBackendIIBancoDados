const express = require("express");

const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  //   password: "123456",
  database: "escola",
});

connection.connect((err) => {
  if (err) {
    console.log("Erro ao conectar ao banco de dados " + err.stack);
    return;
  }
  console.log("Conectado com id " + connection.threadId);
});

app.get("/", (req, res) => {
  res.send("Sistema de Cadastro de Alunos");
});

app.get("/sobre", (req, res) => {
  res.send("Univerdade xyz");
});

app.get("/contato", (req, res) => {
  res.send("Entre em contato com a gente");
});

app.listen(4000);
