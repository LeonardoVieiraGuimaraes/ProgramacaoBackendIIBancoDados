const Aluno = require("../models/alunoModel");

exports.list = async (req, res) => {
  const alunos = await Aluno.findAll();
  res.render("index", { alunos });
};

exports.addForm = (req, res) => {
  res.render("add");
};

exports.create = async (req, res) => {
  await Aluno.create(req.body);
  res.redirect("/");
};

exports.editForm = async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  res.render("edit", { aluno });
};

exports.update = async (req, res) => {
  await Aluno.update(req.body, {
    where: { id: req.params.id },
  });
  res.redirect("/");
};

exports.delete = async (req, res) => {
  await Aluno.destroy({
    where: { id: req.params.id },
  });
  res.redirect("/");
};
