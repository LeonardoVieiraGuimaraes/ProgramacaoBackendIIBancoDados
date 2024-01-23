const express = require("express");

const mysql = require("mysql2");

const app = express();

const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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

app.get("/contato", function (req, res) {
  res.send("Entre em contato com a gente");
});

app.get("/cadastrar", (req, res) => {
  res.render("./layouts/cadastro");
});

app.get("/listar", (req, res) => {
  res.render("listar");
});

app.listen(4000);
