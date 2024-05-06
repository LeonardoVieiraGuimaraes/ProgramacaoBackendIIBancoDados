// Importa o módulo 'express', que fornece funcionalidades para criar um servidor HTTP.
const express = require("express");

// Importa as funções 'consultarTodos' e 'inserirAluno' do módulo 'alunocontrole'.
const { consultarTodos, inserirAluno } = require("../controle/alunocontrole");

// Cria um novo roteador Express.
const rotas = express.Router();

// Define as rotas para o caminho '/'.
// A rota GET usa a função 'consultarTodos' e a rota POST usa a função 'inserirAluno'.
rotas.route("/").get(consultarTodos).post(inserirAluno);

// Exporta o roteador.
module.exports = rotas;
