// Importa o modelo Aluno do arquivo alunoModel.js
const Aluno = require("../models/alunoModel");

// Função assíncrona para listar todos os alunos
exports.list = async (req, res) => {
  // Busca todos os alunos no banco de dados
  const alunos = await Aluno.findAll();

  // Renderiza a página index.ejs e passa a lista de alunos para ela
  res.render("index", { alunos });
};

// Função para renderizar o formulário de adição de aluno
exports.addForm = (req, res) => {
  res.render("add");
};

// Função assíncrona para criar um novo aluno
exports.create = async (req, res) => {
  // Cria um novo aluno com os dados do corpo da requisição
  await Aluno.create(req.body);

  // Redireciona para a página inicial
  res.redirect("/");
};

// Função assíncrona para renderizar o formulário de edição de aluno
exports.editForm = async (req, res) => {
  // Busca o aluno pelo ID passado como parâmetro na URL
  const aluno = await Aluno.findByPk(req.params.id);

  // Renderiza a página edit.ejs e passa o aluno para ela
  res.render("edit", { aluno });
};

// Função assíncrona para atualizar um aluno
exports.update = async (req, res) => {
  // Atualiza o aluno com o ID passado como parâmetro na URL com os dados do corpo da requisição
  await Aluno.update(req.body, {
    where: { id: req.params.id },
  });

  // Redireciona para a página inicial
  res.redirect("/");
};

// Função assíncrona para deletar um aluno
exports.delete = async (req, res) => {
  // Deleta o aluno com o ID passado como parâmetro na URL
  await Aluno.destroy({
    where: { id: req.params.id },
  });

  // Redireciona para a página inicial
  res.redirect("/");
};
