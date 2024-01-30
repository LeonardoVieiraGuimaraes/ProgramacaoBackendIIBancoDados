// Importa o módulo Express, que é um framework para Node.js
const express = require("express");

// Importa o módulo mysql2, que é um driver de MySQL para Node.js
const mysql = require("mysql2");

// Cria uma nova aplicação Express
const app = express();

// Importa o módulo express-handlebars, que é um motor de templates para Express
const handlebars = require("express-handlebars");

// Importa o módulo body-parser, que é um middleware para analisar o corpo das requisições HTTP
const bodyParser = require("body-parser");

// Importa o módulo Aluno, que provavelmente contém funções para Aluno dados no banco de dados
const Aluno = require("./models/Aluno");

// Configura o motor de templates para usar Handlebars, com o layout padrão sendo "main"
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));

// Define o motor de visualização para usar Handlebars
app.set("view engine", "handlebars");

// Configura o middleware body-parser para analisar requisições com corpo codificado em URL
app.use(bodyParser.urlencoded({ extended: false }));

// Configura o middleware body-parser para analisar requisições com corpo em formato JSON
app.use(bodyParser.json());

// Cria uma nova conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: "localhost", // O host do banco de dados
  user: "root", // O usuário do banco de dados
  //   password: "123456", // A senha do banco de dados
  database: "escolaxyz", // O nome do banco de dados
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
  // res.render("./layouts/main");
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

// Define a rota GET para "/cadastrar"
app.get("/cadastrar", (req, res) => {
  // Renderiza a view de cadastro
  res.render("./layouts/cadastro");
});

// Define uma rota GET para o endpoint "/listar"
app.get("/listar", (req, res) => {
  // Chama o método findAll() do modelo 'Aluno' para buscar todos os registros
  Aluno.findAll()
    .then((dados) => {
      // Quando a promessa é resolvida, os dados retornados são convertidos para JSON.
      // Isso é feito porque os objetos retornados pelo Sequelize incluem muitas propriedades extras
      // que não são necessárias na view.
      const dadosJson = dados.map((dado) => dado.toJSON());

      // Renderiza a view 'listar' e passa os dados para ela.
      // 'listarTodos' é um objeto que contém todos os registros convertidos para JSON.
      // 'runtimeOptions' é um objeto que contém opções de tempo de execução para o Handlebars.
      // 'allowProtoPropertiesByDefault: true' permite o acesso a propriedades de protótipo,
      // que é necessário para acessar os dados do Sequelize na view.
      res.render("listar", {
        listarTodos: dadosJson,
        runtimeOptions: {
          allowProtoPropertiesByDefault: true,
        },
      });
    })
    // Se ocorrer um erro ao buscar os dados, a promessa é rejeitada e o erro é capturado aqui.
    .catch((erro) => {
      // O erro é enviado como resposta.
      res.send("Erro: " + erro);
    });
});
// Define a rota POST para "/adicionar-aluno"
app.post("/adicionar-aluno", (req, res) => {
  // Cria um novo aluno com os dados do corpo da requisição
  Aluno.create({
    matricula: req.body.matricula,
    nome: req.body.nome,
    cpf: req.body.cpf,
    rg: req.body.rg,
  })
    .then(() => {
      // Se a criação for bem sucedida, redireciona para a rota "/cadastrar"
      return res.redirect("/listar");
    })
    .catch((erro) => {
      // Se houver um erro, envia uma resposta com a mensagem de erro
      return res.send("Erro: " + erro);
    });
});

// Define a rota GET para "/excluir-aluno/:id"
app.get("/excluir-aluno/:id", (req, res) => {
  // Exclui um aluno com o id passado como parâmetro na URL
  Aluno.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      // Se a exclusão for bem sucedida, redireciona para a rota "/listar"
      res.redirect("/listar");
    })
    .catch((erro) => {
      // Se houver um erro, envia uma resposta com a mensagem de erro
      res.send("Erro: " + erro);
    });
});

// Define a rota GET para "/editar-aluno/:id"
app.get("/editar-aluno/:id", (req, res) => {
  // Busca um aluno com o id passado como parâmetro na URL
  Aluno.findOne({ where: { id: req.params.id } })
    .then((alterarum) => {
      // Se o aluno for encontrado, renderiza a view de alterar com os dados do aluno
      return res.render("./layouts/alterar", {
        alterarum: alterarum.get(),
        runtimeOptions: {
          allowProtoPropertiesByDefault: true,
          allowProtoMethodsByDefault: true,
        },
      });
    })
    .catch((erro) => {
      // Se houver um erro, envia uma resposta com a mensagem de erro
      return res
        .status(400)
        .json({ erro: true, message: "Aluno não encontrado" });
    });
});
// Define a rota POST para "/efetuar-alteracao/:id"
app.post("/efetuar-alteracao/:id", (req, res) => {
  // Busca um aluno com o id passado como parâmetro na URL
  Aluno.findOne({ where: { id: req.params.id } })
    .then((alterar) => {
      // Se o aluno for encontrado, atualiza os dados do aluno com os dados do corpo da requisição
      alterar.matricula = req.body.matricula;
      alterar.nome = req.body.nome;
      alterar.cpf = req.body.cpf;
      alterar.rg = req.body.rg;

      // Salva as alterações no aluno
      alterar
        .save()
        .then(() => {
          // Se a alteração for bem sucedida, redireciona para a raiz ("/")
          res.redirect("/listar");
        })
        .catch((erro) => {
          // Se houver um erro, envia uma resposta com a mensagem de erro
          return res.send("Erro interno " + erro);
        });
    })
    .catch((erro) => {
      // Se houver um erro, envia uma resposta com a mensagem de erro
      res.send("Erro ao atualizar aluno" + erro);
    });
});

// Inicia o servidor na porta 4000
app.listen(4000);
