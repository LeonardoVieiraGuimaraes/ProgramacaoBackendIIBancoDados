// Importa o módulo express para criar o servidor
const express = require("express");

// Importa o módulo body-parser para analisar o corpo das requisições HTTP
const bodyParser = require("body-parser");

// Importa o módulo alunoController que contém as funções para manipular os dados dos alunos
const alunoController = require("./controllers/alunoController");

// Cria uma nova aplicação express
const app = express();

// Define o motor de visualização para ejs, que é usado para renderizar as páginas HTML
app.set("view engine", "ejs");

// Usa o body-parser para analisar o corpo das requisições HTTP
app.use(bodyParser.urlencoded({ extended: false }));

// Define a rota GET para a página inicial que lista todos os alunos
app.get("/", alunoController.list);

// Define a rota GET para a página de adição de um novo aluno
app.get("/add", alunoController.addForm);

// Define a rota POST para criar um novo aluno
app.post("/add", alunoController.create);

// Define a rota GET para a página de edição de um aluno
app.get("/edit/:id", alunoController.editForm);

// Define a rota POST para atualizar um aluno
app.post("/edit/:id", alunoController.update);

// Define a rota GET para deletar um aluno
app.get("/delete/:id", alunoController.delete);

// Inicia o servidor na porta 3000 e imprime uma mensagem no console quando o servidor está pronto
app.listen(3000, function () {
  console.log("App listening on http://localhost:3000");
});
