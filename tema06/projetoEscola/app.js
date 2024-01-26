// Importa o módulo Express, que é um framework para Node.js
const express = require("express");

// Importa o módulo mysql2, que é um driver de MySQL para Node.js
const mysql = require("mysql2");

// Cria uma nova aplicação Express
const app = express();

// Importa o módulo express-handlebars, que é um motor de templates para Express
const handlebars = require("express-handlebars");

const bodyParser = require("body-parser");

const inserir = require("./models/inserir");

// Configura o motor de templates para usar Handlebars, com o layout padrão sendo "main"
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));

// Define o motor de visualização para usar Handlebars
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cria uma nova conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: "localhost", // O host do banco de dados
  user: "root", // O usuário do banco de dados
  //   password: "123456", // A senha do banco de dados
  database: "escola", // O nome do banco de dados
});

// Conecta ao banco de dados
connection.connect((err) => {
  // Se houver um erro ao conectar, loga o erro e retorna
  if (err) {
    console.log("Erro ao conectar ao banco de dados " + err.stack);
    return;
  }
  // Se a conexão for bem sucedida, loga o ID da thread de conexão
  console.log("Conectado com id " + connection.threadId);
});

// Define a rota GET para a raiz ("/") da aplicação
app.get("/", (req, res) => {
  // Envia a resposta "Sistema de Cadastro de Alunos"
  res.send("Sistema de Cadastro de Alunos");
});

// Define a rota GET para "/sobre"
app.get("/sobre", (req, res) => {
  // Envia a resposta "Universidade xyz"
  res.send("Universidade xyz");
});

// Define a rota GET para "/contato"
app.get("/contato", (req, res) => {
  // Envia a resposta "Entre em contato com a gente"
  res.send("Entre em contato com a gente");
});

app.get("/cadastrar", (req, res) => {
  res.render("./layouts/cadastro");
});

app.get("/listar", (req, res) => {
  res.render("listar");
});

app.post("/adicionar-aluno", (req, res) => {
  inserir
    .create({
      matricula: req.body.matricula,
      nome: req.body.nome,
      cpf: req.body.cpf,
      rg: req.body.rg,
    })
    .then(() => {
      res.redirect("/listar");
    })
    .catch((erro) => {
      res.send("Erro: " + erro);
    });
});

app.get("/excluir-aluno/:id", (req, res) => {
  inserir
    .destroy({
      where: { id: req.params.id },
    })
    .then(() => {
      res.redirect("/listar");
    })
    .catch((erro) => {
      res.send("Erro: " + erro);
    });
});

app.get("/editar-aluno/:id", (req, res) => {
  console.log(req.params.id);
  inserir
    .findOne({ where: { id: req.params.id } })
    .then((aluno) => {
      return res.render(".layouts/alterar", { aluno: aluno });
    })
    .catch((erro) => {
      return res
        .status(400)
        .json({ erro: true, message: "Aluno não encontrado" });
    });
});

app.listen(4000);
