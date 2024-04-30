const express = require("express");

const { consultarTodos, inserirAluno } = require("../controle/alunoControle");

const rotas = express.Router();

rotas.route("/").get(consultarTodos).post(inserirAluno);

module.exports = rotas;
